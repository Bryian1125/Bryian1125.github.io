// Auto-playing Tetris rendered inside the <pre class="asciiBackground"> box.
// It reads the box's size from the existing '#' text, so resizing the box in
// the HTML automatically resizes the game.
(() => {
    const el = document.querySelector('.asciiBackground');
    if (!el) return;

    // ---------- config ----------
    const TICK_MS = 60;          // game speed (lower = faster)
    const FLASH_COLOR = '#ffffff';
    const PIECE_TEXT_COLOR = '#16161D'; // matches the page background
    const CELL_W = 4;            // chars per cell horizontally
    const CELL_H = 2;            // rows per cell vertically
    const PAD = 2;               // blank gap between the '#' frame and the playfield

    // ---------- measure the box from the original '#' text ----------
    const lines = el.textContent.split('\n').map(s => s.trim()).filter(s => /^#.*#$/.test(s));
    const W = Math.max(...lines.map(l => l.length));
    const H = lines.length;
    const COLS = Math.floor((W - 2 * PAD) / CELL_W);
    const ROWS = Math.floor((H - 2 * PAD) / CELL_H);
    const offX = Math.floor((W - COLS * CELL_W) / 2);
    const offY = Math.floor((H - ROWS * CELL_H) / 2);

    // ---------- pieces ----------
    const rotate = m => m[0].map((_, i) => m.map(r => r[i]).reverse());
    const defs = {
        I: { m: [[1, 1, 1, 1]], label: 'py',   c: '#7B68EE' },
        O: { m: [[1, 1], [1, 1]], label: 'ts',   c: '#7FD4FF' },
        T: { m: [[0, 1, 0], [1, 1, 1]], label: 'js',   c: '#FFE55C' },
        S: { m: [[0, 1, 1], [1, 1, 0]], label: 'rust', c: '#E5484D' },
        Z: { m: [[1, 1, 0], [0, 1, 1]], label: 'asm',  c: '#3CCF8E' },
        J: { m: [[1, 0, 0], [1, 1, 1]], label: 'lua',  c: '#F06FB0' },
        L: { m: [[0, 0, 1], [1, 1, 1]], label: 'zig',  c: '#F7A41D' },
    };
    const pieces = Object.values(defs).map(({ m, c, label }) => {
        const rots = [];
        let cur = m;
        for (let i = 0; i < 4; i++) {
            if (!rots.some(r => JSON.stringify(r) === JSON.stringify(cur))) rots.push(cur);
            cur = rotate(cur);
        }
        return { rots, color: c, label };
    });

    // ---------- state ----------
    let grid, cur, plan, flashRows, flashTicks, overTicks;

    const emptyGrid = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));

    function collides(m, x, y, g = grid) {
        for (let r = 0; r < m.length; r++) {
            for (let c = 0; c < m[r].length; c++) {
                if (!m[r][c]) continue;
                const nx = x + c, ny = y + r;
                if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
                if (ny >= 0 && g[ny][nx]) return true;
            }
        }
        return false;
    }

    // ---------- AI (classic heuristic: lines, holes, height, bumpiness) ----------
    function score(g, linesCleared) {
        const heights = Array(COLS).fill(0);
        let holes = 0;
        for (let c = 0; c < COLS; c++) {
            let seen = false;
            for (let r = 0; r < ROWS; r++) {
                if (g[r][c]) {
                    if (!seen) { heights[c] = ROWS - r; seen = true; }
                } else if (seen) holes++;
            }
        }
        const agg = heights.reduce((a, b) => a + b, 0);
        let bump = 0;
        for (let c = 0; c < COLS - 1; c++) bump += Math.abs(heights[c] - heights[c + 1]);
        return -0.51 * agg + 0.76 * linesCleared - 0.36 * holes - 0.18 * bump + Math.random() * 0.3;
    }

    function choosePlan(piece) {
        let best = null;
        piece.rots.forEach((m, rot) => {
            for (let x = 0; x <= COLS - m[0].length; x++) {
                let y = -m.length;
                if (collides(m, x, y)) continue;
                while (!collides(m, x, y + 1)) y++;
                const g = grid.map(r => r.slice());
                m.forEach((row, r) => row.forEach((v, c) => {
                    if (v && y + r >= 0) g[y + r][x + c] = 1;
                }));
                const full = g.filter(r => r.every(Boolean)).length;
                // pad removed rows back so heights stay comparable
                const padded = Array.from({ length: full }, () => Array(COLS).fill(null))
                      .concat(g.filter(r => !r.every(Boolean)));
                const sc = score(padded, full);
                if (!best || sc > best.sc) best = { rot, x, sc };
            }
        });
        return best;
    }

    // ---------- game flow ----------
    function reset() {
        grid = emptyGrid();
        flashRows = null;
        flashTicks = 0;
        overTicks = 0;
        spawn();
    }

    function spawn() {
        const piece = pieces[Math.floor(Math.random() * pieces.length)];
        const m = piece.rots[0];
        cur = { piece, rot: 0, m, x: Math.floor((COLS - m[0].length) / 2), y: -m.length, color: piece.color, label: piece.label };
        if (collides(m, cur.x, cur.y + 1)) { overTicks = 30; return; }
        plan = choosePlan(piece);
    }

    function lock() {
        cur.m.forEach((row, r) => row.forEach((v, c) => {
            if (v && cur.y + r >= 0) grid[cur.y + r][cur.x + c] = cur.piece;
        }));
        const full = [];
        grid.forEach((row, i) => { if (row.every(Boolean)) full.push(i); });
        if (full.length) { flashRows = full; flashTicks = 6; cur = null; }
        else spawn();
    }

    function step() {
        if (overTicks) {
            if (--overTicks === 0) reset();
            return;
        }
        if (flashRows) {
            if (--flashTicks === 0) {
                grid = grid.filter((_, i) => !flashRows.includes(i));
                while (grid.length < ROWS) grid.unshift(Array(COLS).fill(null));
                flashRows = null;
                spawn();
            }
            return;
        }
        // rotate toward plan (one step per tick)
        if (cur.rot !== plan.rot) {
            const nr = (cur.rot + 1) % cur.piece.rots.length;
            const nm = cur.piece.rots[nr];
            if (!collides(nm, cur.x, cur.y)) { cur.rot = nr; cur.m = nm; }
            else { cur.rot = nr; cur.m = nm; } // top of board is empty; safe to force
        }
        // slide toward target column (up to 2 cells per tick)
        for (let i = 0; i < 2 && cur.x !== plan.x; i++) {
            const nx = cur.x + Math.sign(plan.x - cur.x);
            if (!collides(cur.m, nx, cur.y)) cur.x = nx;
        }
        // gravity
        if (!collides(cur.m, cur.x, cur.y + 1)) cur.y++;
        else lock();
    }

    // ---------- rendering ----------
    function render() {
        const buf = Array.from({ length: H }, (_, y) =>
            Array.from({ length: W }, (_, x) => ({
                ch: (y === 0 || y === H - 1 || x === 0 || x === W - 1) ? '#' : ' ',
                color: null,
            })));

        const putCell = (r, c, color, label) => {
            if (r < 0 || r >= ROWS) return;
            // loop the label until it fills the cell edge to edge, both rows,
            // so a piece reads as a solid block of letters (e.g. 'pypy')
            const text = label.repeat(Math.ceil(CELL_W / label.length)).slice(0, CELL_W);
            for (let dy = 0; dy < CELL_H; dy++) {
                const y = offY + r * CELL_H + dy;
                const x = offX + c * CELL_W;
                for (let i = 0; i < CELL_W; i++) {
                    buf[y][x + i] = { ch: text[i], color };
                }
            }
        };

        grid.forEach((row, r) => row.forEach((piece, c) => {
            if (piece) putCell(r, c, flashRows && flashRows.includes(r) ? FLASH_COLOR : piece.color, piece.label);
        }));
        if (cur) {
            cur.m.forEach((row, r) => row.forEach((v, c) => {
                if (v) putCell(cur.y + r, cur.x + c, cur.color, cur.label);
            }));
        }

        // build HTML, merging runs of the same color into one <span>
        let html = '';
        for (const row of buf) {
            let i = 0;
            while (i < row.length) {
                const color = row[i].color;
                let s = '';
                while (i < row.length && row[i].color === color) s += row[i++].ch;
                html += color ? `<span style="color:${PIECE_TEXT_COLOR};background-color:${color}">${s}</span>` : s;
            }
            html += '\n';
        }
        el.innerHTML = html;
    }

    reset();
    render();
    setInterval(() => { step(); render(); }, TICK_MS);
})();

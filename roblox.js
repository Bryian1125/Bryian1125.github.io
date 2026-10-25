const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { lightboxImg.src = ''; }, 200);
}

document.querySelectorAll('.galleryGrid > *').forEach(cell => {
    cell.addEventListener('click', () => {
        const img = cell.querySelector('img');
        if (img && img.src) {
            openLightbox(img.src);
        }
    });
});

lightboxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('lightbox--open')) {
        closeLightbox();
    }
});

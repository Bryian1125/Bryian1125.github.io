const animatedAscii = document.getElementById("animatedAscii");

var state = true;

let frame1 =
`    ██          ██
      ██      ██
    ██████████████
  ████  ██████  ████
██████████████████████
██  ██████████████  ██
██  ██          ██  ██
      ████  ████
`;

let frame2 =
`    ██          ██
██    ██      ██    ██
██  ██████████████  ██
██████  ██████  ██████
██████████████████████
  ██████████████████
    ██          ██
  ██              ██
`;



function animate() {
    if (state == true) {
        state = false;
        animatedAscii.innerHTML = frame1;
    } else if (state == false) {
        state = true;
        animatedAscii.innerHTML = frame2;
    }
}

setInterval(animate, 500);

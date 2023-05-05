// expose.js

let airHornImage = "assets/images/air-horn.svg";
let carHornImage = "assets/images/car-horn.svg";
let partyHornImage = "assets/images/party-horn.svg";
let defaultImage = "assets/images/no-image.png";

let airHornSound = "assets/images/air-horn.mp3";
let carHornSound = "assets/images/car-horn.mp3";
let partyHornSound = "assets/images/party-horn.mp3";

let volIcon0 = "assets/icons/volume-level-0.svg";
let volIcon1 = "assets/icons/volume-level-1.svg";
let volIcon2 = "assets/icons/volume-level-2.svg";
let volIcon3 = "assets/icons/volume-level-3.svg";

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornImage = document.querySelector("img");
  let hornAudio = document.querySelector("audio");
  let hornSelect = document.getElementById("horn-select");

  hornSelect.addEventListener('change', (event) => {
    switch(event.target.value) {
      case "air-horn":
        console.log("Changed to Air Horn.");
        hornImage.src = airHornImage;
        hornAudio.src = airHornSound;
        break;
      case "car-horn":
        console.log("Changed to Car Horn.");
        hornImage.src = carHornImage;
        hornAudio.src = carHornSound;
        break;
      case "party-horn":
        console.log("Changed to Party Horn.");
        hornImage.src = partyHornImage;
        hornAudio.src = partyHornSound;
        break;
      default:
        hornImage.src = defaultImage;
        break;
    }
  });

  let volumeInput = document.getElementById("volume");
  let volumeIcon = document.querySelector("#volume-controls img");
  volumeInput.addEventListener('input', (event) => {
    hornAudio.volume = event.target.value / 100;
    console.log("Volume changed to: ", event.target.value / 100);
    if (event.target.value == 0) {
      volumeIcon.src = volIcon0;
    }
    else if (event.target.value < 33) {
      volumeIcon.src = volIcon1;
    }
    else if (event.target.value < 67) {
      volumeIcon.src = volIcon2;
    }
    else {
      volumeIcon.src = volIcon3;
    }
  });
}
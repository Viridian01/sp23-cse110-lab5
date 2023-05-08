// explore.js

let smilingImage = "assets/images/smiling.png";
let smilingOpenImage = "assets/images/smiling-open.png";
let image = document.querySelector("img");

const speechSynth = window.speechSynthesis;
let textToSpeak = document.getElementById("text-to-speak");
let button = document.querySelector("button");
let voiceSelect = document.querySelector("select");
let voices = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Populate "select voice" dropdown
  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;

  // Play speech
  button.addEventListener("click", (event) => {
    console.log("Button clicked");

    event.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    // Display appropriate image during speech
    image.src = smilingOpenImage;
    speechSynth.speak(utterThis);
    utterThis.addEventListener("end", (event) => {
      image.src = smilingImage;
    });
  });
}

function populateVoiceList() {
  voices = speechSynth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}


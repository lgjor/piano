const audioPath = "src/tunes/";
const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

const mapedKeys = [];

let audio = new Audio;

const playTune = (key) => {
  const audio = new Audio(); // Create a new Audio object each time
  audio.type = "audio/wav";
  audio.src = `${audioPath}${key}.wav`;
  audio.volume = volumeSlider.value; // Set the volume of the new audio object
  audio.play();
  const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// Function to update the keydown event listener
const updateKeydownListener = () => {
    document.removeEventListener("keydown", keydownHandler); // Remove the old listener

    document.addEventListener("keydown", keydownHandler); // Add the new listener
};

// Keydown handler function
function keydownHandler(event) {
    if (mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
}

// Initial keydown listener setup
updateKeydownListener();

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys);
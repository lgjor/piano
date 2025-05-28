const audioPath = "src/tunes/";
const pianoKeys = document.querySelectorAll('.piano-keys .key');

const playTune = (key) => {
  let audio = new Audio;
  audio.type = "audio/wav";
  audio.src = `${audioPath}${key}.wav`;
  audio.play();
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener(
  "keydown",
  (event) => { 
    playTune(event.key);
});
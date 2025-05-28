const audioPath = "src/tunes/";
const pianoKeys = document.querySelectorAll('.piano-keys .key');

let mapedKeys = [];

const playTune = (key) => {
  let audio = new Audio;
  audio.type = "audio/wav";
  audio.src = `${audioPath}${key}.wav`;
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

document.addEventListener(
  "keydown",
  (event) => { 
    if (mapedKeys.includes(event.key)) {
      playTune(event.key)
    };
});
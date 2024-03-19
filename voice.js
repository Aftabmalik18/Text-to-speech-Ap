const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const textToSpeak = document.getElementById('text-to-speak');
let utterance = new SpeechSynthesisUtterance();

playButton.addEventListener('click', () => {
  if (textToSpeak.value !== '') {
    utterance.text = textToSpeak.value;
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Please enter some text to speak.');
  }
});

stopButton.addEventListener('click', () => {
  window.speechSynthesis.cancel();
});

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;

function generateRingtone() {
  const name = document.getElementById("nameInput").value;
  const status = document.getElementById("status");

  if (name === "") {
    alert("Naam likho pehle!");
    return;
  }

  const text = name + " ji, phone utha lo... koi call kar raha hai";

  const speech = new SpeechSynthesisUtterance(text);

  // Indian voice try karo
  const indianVoice = voices.find(v => v.lang === "en-IN" || v.lang === "hi-IN");

  if (indianVoice) {
    speech.voice = indianVoice;
  }

  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.speak(speech);

  status.innerText = "🔊 Ringtone play ho rahi hai...";
}

function downloadRingtone() {
  alert("⚠ Abhi download feature next version me aayega.\nScreen recorder use karo 🔥");
}

async function generateRingtone() {
  const name = document.getElementById("nameInput").value;

  if (!name) {
    alert("Naam likho!");
    return;
  }

  const text = `${name} ji, phone utha lo... koi call kar raha hai`;

  // FREE TTS API
  const url = `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(text)}`;

  const audio = new Audio(url);
  audio.play();

  // Save URL globally for download
  window.audioURL = url;
}

function downloadRingtone() {
  if (!window.audioURL) {
    alert("Pehle generate karo!");
    return;
  }

  const a = document.createElement("a");
  a.href = window.audioURL;
  a.download = "ringtone.mp3";
  a.click();
}

function generate() {
  let name = document.getElementById("name").value;

  // pronunciation fix
  let fixedName = name
    .replace(/vishal/i, "vishaal")
    .replace(/rahul/i, "raahul")
    .replace(/sahil/i, "saahhil");

  let text = fixedName + " calling";

  let speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-IN"; // Indian accent

  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}

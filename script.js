let audioBlob;

function generateRingtone() {
    const name = document.getElementById("nameInput").value;

    const text = name + " is calling, please pick up the phone";

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";

    speech.onend = function() {
        console.log("Speech finished");
    };

    window.speechSynthesis.speak(speech);
}

function downloadRingtone() {
    alert("Download feature advanced version me add karenge 🔥");
}

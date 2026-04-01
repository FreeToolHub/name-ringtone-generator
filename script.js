let audioBlob;

function generate() {
  let name = document.getElementById("name").value;
  let text = name + " calling";

  let speech = new SpeechSynthesisUtterance(text);

  let mediaStream = new MediaStream();
  let recorder = new MediaRecorder(mediaStream);
  let chunks = [];

  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => {
      chunks.push(e.data);
    };

    recorder.onstop = e => {
      audioBlob = new Blob(chunks, { type: 'audio/mp3' });
      let audioURL = URL.createObjectURL(audioBlob);

      document.getElementById("audio").src = audioURL;

      document.getElementById("downloadBtn").style.display = "block";
      document.getElementById("downloadBtn").onclick = () => {
        let a = document.createElement("a");
        a.href = audioURL;
        a.download = name + "-ringtone.mp3";
        a.click();
      };
    };

    recorder.start();
    speechSynthesis.speak(speech);

    setTimeout(() => recorder.stop(), 3000);
  });
}

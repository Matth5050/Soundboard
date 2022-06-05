input.onchange = function (e) {
  var sound = document.getElementById("sound");
  sound.src = URL.createObjectURL(this.files[0]);
  sound.onend = function (e) {
    URL.revokeObjectURL(this.src);
  };
};

function play() {
  var audio = document.getElementById("sound");
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}

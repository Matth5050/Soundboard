$(function(){
  $("audio").on("play", function() {
      $("audio").not(this).each(function(index, audio) {
          audio.pause();
      });
  });
});

$('input#input').on('change', function () {
  let sound = $('audio#sound');
  console.log('input1');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn').click(function() {
    var audio = document.getElementById("sound");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('input#input2').on('change', function () {
  let sound = $('audio#sound2');
  console.log('input2');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn2').click(function() {
    console.log('btn2');
    var audio = document.getElementById("sound2");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});
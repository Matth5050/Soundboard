
// This function prevents audio fom overlapping
$(function(){
  $("audio").on("play", function() {
      $("audio").not(this).each(function(index, audio) {
          audio.pause();
      });
  });
});

// This function turns upload into URL so it can be played
$('input#input1').on('change', function () {
  let sound = $('audio#sound');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});
//This function resets audio to beginning after each click
$('button#btn1').click(function() {
    var audio = document.getElementById("sound");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

// This function puts the file name in assiociated tag
$('#input1').change(function(e){
  let filename = e.target.files[0].name;
  $('.name1').text(filename);
});
  function displayfilename() {
    $('#input1').trigger('change');
}

// Beginning Input2
$('input#input2').on('change', function () {
  let sound = $('audio#sound2');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn2').click(function() {
    var audio = document.getElementById("sound2");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input2').change(function(e){
  let filename = e.target.files[0].name;
  $('.name2').text(filename);
});
  function displayfilename() {
    $('#input2').trigger('change');
}
// End Input2

// Beginning input3
$('input#input3').on('change', function () {
  let sound = $('audio#sound3');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn3').click(function() {
    var audio = document.getElementById("sound3");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input3').change(function(e){
  let filename = e.target.files[0].name;
  $('.name3').text(filename);
});
  function displayfilename() {
    $('#input3').trigger('change');
  };
// End input 3

// Beginning input4
$('input#input4').on('change', function () {
  let sound = $('audio#sound4');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn4').click(function() {
    var audio = document.getElementById("sound4");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input4').change(function(e){
  let filename = e.target.files[0].name;
  $('.name4').text(filename);
});
  function displayfilename() {
    $('#input4').trigger('change');
  };
// End input 4

// Beginning input 5
$('input#input5').on('change', function () {
  let sound = $('audio#sound5');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn5').click(function() {
    var audio = document.getElementById("sound5");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input5').change(function(e){
  let filename = e.target.files[0].name;
  $('.name5').text(filename);
});
  function displayfilename() {
    $('#input5').trigger('change');
  };
// End input 5

// Beginning input 6
$('input#input6').on('change', function () {
  let sound = $('audio#sound6');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn6').click(function() {
    var audio = document.getElementById("sound6");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input6').change(function(e){
  let filename = e.target.files[0].name;
  $('.name6').text(filename);
});
  function displayfilename() {
    $('#input6').trigger('change');
  };
// End input 8

// Beginning input 7
$('input#input7').on('change', function () {
  let sound = $('audio#sound7');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn7').click(function() {
    var audio = document.getElementById("sound7");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input7').change(function(e){
  let filename = e.target.files[0].name;
  $('.name7').text(filename);
});
  function displayfilename() {
    $('#input7').trigger('change');
  };
// End input 7

// Beginning input 8
$('input#input8').on('change', function () {
  let sound = $('audio#sound8');
  let soundSrc = sound.attr('src', URL.createObjectURL(this.files[0]));
  soundSrc.on('end', function(){
    URL.revokeObjectURL(this.attr());
  })
});

$('button#btn8').click(function() {
    var audio = document.getElementById("sound8");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    };
});

$('#input8').change(function(e){
  let filename = e.target.files[0].name;
  $('.name8').text(filename);
});
  function displayfilename() {
    $('#input8').trigger('change');
  };
// End input 8
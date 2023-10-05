$(document).ready(function(){
  var currentAudio = null; // Untuk melacak audio saat ini yang sedang diputar

  $("div.tekukur").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/burungTekukur.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-tekukur.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });

  $("div.perkutut").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/burungPerkutut.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-perkutut.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });

  $("div.camar").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/burungCamar.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-camar.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
  
  $("div.beruang").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/beruang.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-beruang.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });

  $("div.serigala").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/serigala.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-serigala.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
  $("div.harimau").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/harimau.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-harimau.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
  $("div.ayam").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/ayam.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-ayam.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
  $("div.sapi").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/sapi.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-sapi.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
  $("div.babi").click(function(){
    if (currentAudio) {
      currentAudio[0].pause();
    }
    $(this).css({
      'background-color':'white',
      'border': '1px solid blue',
      'background-image': 'url("Images/babi.jpg")',
    });
    currentAudio = $("<audio></audio").attr({
      'src':'Audio/suara-babi.mp3',
      'volume': '0.5',
      'autoplay': 'autoplay',
    });
  });
});
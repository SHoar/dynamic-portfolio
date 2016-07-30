var main = function() {
	$('#top-text').keyup(function (){
  	var $toptext = $('#top-text').val();
    $('.top-caption').text($toptext);
  });
  $('#bottom-text').keyup(function (){
  	var $bottomtext = $('#bottom-text').val();
    $('.bottom-caption').text($bottomtext);
  });
  $('#image-url').keyup(function (){
  	var $imageURL = $('#image-url').val();
    $('img').attr('src', $imageURL);
  });
};

$(document).ready(main);

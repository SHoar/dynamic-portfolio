$(document).ready(function (){
  $('li').css(background:"blue", 500)
  $('nav.li').hover(function(){
    $('this').animate({height: '-=20px'}, 500);
  });
});

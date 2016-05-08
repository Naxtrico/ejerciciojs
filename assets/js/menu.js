$(document).ready(function(){
  $('#mobile-button').click(function() {
  var menu = $('#menu-container'); 
  menu.show();
  $('#mobile-button').hide();
  $('#mobile-close').show();

});

$('#mobile-close').click(function() {
  var menu = $('#menu-container'); 

  menu.hide();
  $('#mobile-button').show();
  $('#mobile-close').hide();

});


$('#menu-container nav > ul > li > a').click(function(e) {
    e.preventDefault();
    $.removeClass('current-menu-item');
    $(this).parent().addClass('current-menu-item');
  });

  $('#menu-container li').hover(function() {
    $(this).find('.sub-menu').fadeToggle(100);
  });

$(window).resize(function() {
  if ($(window).width()>990) {
    $('#mobile-button').hide();
    $('#mobile-container').show();
    $('#mobile-close').hide();
  } 
});
});


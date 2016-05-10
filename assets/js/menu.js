// Menú hamburguesa. Al hacer click en responsive sobre el botón,
// se despliega el menú y se muestra el botón de cerrar y viceversa


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

//Al hacer hover sobre un elemento del menú en desktop se muestra el sub menú


$('#menu-container nav > ul > li > a').click(function(e) {
    e.preventDefault();
    $('.current-menu-item').removeClass('current-menu-item');
    $(this).parent().addClass('current-menu-item');
  });

  $('#menu-container li').hover(function() {
    if($(window).width() >= 990) {
    $(this).find('.sub-menu').fadeToggle(100);
  }
  });
  
//Establecer un resize para que se vea el menú hamburguesa
$(window).resize(function() {
    if($(window).width() >= 990) {
      $('#mobile-button').hide();
      $('#mobile-close').hide();
    } else {
      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
      } else {
        $('#mobile-button').show();
      }
    }
  });
//Para refrescar la página y que no de error en los menus
$(window).resize(function() {
    location.reload();

  });

//Ejercicio 3. No he conseguido hacer que funcione, lo he intentado.

 $('#menu-container nav > ul > li > a').click(function(e) {
  $('.sub-menu').show();
  if ($(this).siblings().is(':visible')) {
    
  }
});
 });









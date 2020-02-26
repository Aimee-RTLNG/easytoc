// Attention ; jquery

$("#full-menu button, #full-menu button").on('click', function(){
   $(this).parent().find('ul').css('display', 'block');
});
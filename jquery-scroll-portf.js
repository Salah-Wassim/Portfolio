$('a[href*="#"]').click(function(){
  var href = $(this).attr('href');
  if($(href).length > 0){
    var offset = $(href).offset().top;
    $('html,body').animate({scrollTop:offset}, 'slow');
    return false;
  };
});
$('[scroll-top]').click(function(){
  var top = $(this).attr('scroll-top');
  if($(top).length > 0){
    var offset = $(top).offset().top;
    $('html,body').animate({scrollTop:offset}, 'slow');
    return false;
  };
});

$('.btn-burger').click(function(){
  if($(this).hasClass('fa-bars')){
    $(this).removeClass('fas fa-bars').addClass("fas fa-times");
    $('.section-menu-home').animate({'left':'0'}, 'slow');
  }else{
    $(this).removeClass('fas fa-times').addClass("fas fa-bars");
    $('.section-menu-home').animate({'left':'-100%'}, 'slow');
  };
});
$('.link-menu').click(function(){
    $('.section-menu-home').animate({'left':'-100%'}, 'slow');
    $('.btn-burger').removeClass('fas fa-times').addClass("fas fa-bars");
});

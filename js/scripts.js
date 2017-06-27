$(document).ready(function () {
    $('.sub > a').click(function(){
      $('.sub ul').slideUp();
       if ($(this).next().next().is(":visible")){
           $(this).next().next().slideUp();

       } else {
       $(this).next().next().slideToggle();
       }
      return false;
    });
       $('.nav-catalog > ul > li > a').click(function(){
         $('.sub i').removeClass("fa-arrow-down");
         $('.sub i').addClass("fa-plus");
         $('.nav-catalog > ul > li > a, .sub a').removeClass('active');
         $(this).addClass('active');
         $(this).next().removeClass("fa-plus");
         $(this).next().addClass("fa-arrow-down");
      }),

       $('.sub ul li a').click(function(){
           $('.sub ul li a').removeClass('active');
           $(this).addClass('active');
        });
});
$(document).ready(function(){
    $(".mobile-btn").on("click", function(){
      $(".mobile").slideToggle();
      $(this).toggleClass("active");
    });
    $(window).resize(function() {
      if($(window).width() > 830) {
          $('.mobile').slideUp();
      }});
});

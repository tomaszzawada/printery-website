export const slideToSection = () => {   
    $(".nav-item a, .navbar-brand").click(function(e) {
        e.preventDefault();
        var $anchor = $(this);
        if ($(window).width() >= 768) {
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $($anchor.attr("href")).offset().top + -77
              },
              600,
              "easeInOutExpo"
            );
        } else {
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $($anchor.attr("href")).offset().top + -77
              },
              600,
              "easeInOutExpo"
            );
        }
      });
};

export const fixedOnScroll = () => {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
          $("nav").addClass("fixed-border");
          $('.navbar-brand').children('img').attr('height','50');
        } else {
          $("nav").removeClass("fixed-border");
          $('.navbar-brand').children('img').attr('height','100');
        }
      });
}

export const hideNavOnClick = () => {
    $('.navbar-nav>li>a, .navbar-brand').on('click', function(){
        $('.navbar-collapse').collapse('hide');
      });
}
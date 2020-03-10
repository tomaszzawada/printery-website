import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(".owl-carousel").owlCarousel({
    margin: 30,
    loop: false,
    autoplay: false,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        autoHeight:true
      },
      576:{
        items:2
      },
      1200:{
        items:3
      }
    }
  });

  export default carousel;
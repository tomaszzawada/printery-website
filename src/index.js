require('jquery-ui/ui/effect');
require('./img/favicon.ico');
require('./files/Folder_Nieruchomość po drukarni Rzeczpospolita_Koninko.pdf');
require('./files/Plan zagospodarowania.pdf');
import "jquery";
import "bootstrap";
import "./styles/styles.scss";
import { slideToSection, fixedOnScroll, hideNavOnClick } from './js/Navigation';
import map from './js/Map';
import carousel from './js/Carousel';
import lightbox from './js/Lightbox';

slideToSection();
fixedOnScroll();
hideNavOnClick();

$('.carousel').carousel({
  interval: 4000
});

$(window).on("load", function() {
	$(".preloader").fadeOut('slow');
});
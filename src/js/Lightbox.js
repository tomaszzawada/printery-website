require('lightbox2/dist/css/lightbox.min.css')
window.lightbox = require('lightbox2');
// Gallery supported by Lightbox- Copyright (c) 2015 Lokesh Dhakar. For more informations visit: http://lokeshdhakar.com | link to license: https://raw.githubusercontent.com/lokesh/lightbox2/master/LICENSE
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
  });
export default lightbox;
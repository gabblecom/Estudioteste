//masonry using isotope
var $container = $('.blog-masonry');

$container.imagesLoaded(function () {
    $container.isotope({});
});


//waiting function
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


//rezie after 1000 second
$(window).resize(function() {
    delay(function(){
     $('.blog-masonry').isotope('reLayout');
    }, 1000);
});
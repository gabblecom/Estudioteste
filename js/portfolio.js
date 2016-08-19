//portfolio close button 
$('.close-btn').click(function () {
	
     $('.worksajax').fadeOut();
	 setTimeout(function(){$('.port-ajax').fadeOut().remove();},30);
	 $('body').removeClass('scroll-hidden');
	 return false;
	 
});

$(".port-slider").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 400,
    paginationSpeed: 400,
    autoPlay: 5000,
    autoHeight: false,
    singleItem: true,
    transitionStyle: "backSlide"
});
	
// portfolio Video responsive
        $(".worksajax .video").fitVids();
	
// script prettyphoto 
$(document).ready(function () {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: false,
        deeplinking: false
    });
});

//make the owl paginaton vertical aligned
var $control = $('.owl-pagination');
var height = $('.owl-pagination').height();
$control.height(height);
$control.css('margin-top', -height / 2);





// script prettyphoto
$(document).ready(function () {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel',deeplinking: false});
});


//portfolio ajax setting
$(document).ready(function () {
    $('.work-ajax-nav').click(function () {
        var toLoad = $(this).attr('data-link') + ' .worksajax > *';
		$('#load').remove();
		$('body').append('<div id="load"><img class="img-loader" src="images/loading.gif"></div >');
        $('.port-ajax').fadeOut('slow', loadContent);
        function loadContent() {
            $('.worksajax').load(toLoad, '', showNewContent);
        }
        function showNewContent() {
            $.getScript("js/portfolio.js");
            $('.port-ajax').fadeIn('slow');
			$('#load').delay(600).fadeOut('fast');
			
        }
        return false;
    });
});

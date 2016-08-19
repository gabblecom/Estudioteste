
// Video responsive
$("body").fitVids();

// script prettyphoto
$(document).ready(function () {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel',deeplinking: false});
});

//create menu for tablet/mobile
    
	$(".header .navigation").clone(false).find("ul,li").removeAttr("id").remove( ".sub-menu" ).appendTo($(".mobile-menu"));
	$(".mobile-menu .sub-menu").remove();
    $('.mobile-menu').on('show.bs.collapse', function () {
        $('body').on('click', function () {
            $('.mobile-menu').collapse('hide');
        })
    })
	
	//toggle menu
    $('.menu-btn').on('click', function () {
        $('.mobile-menu').collapse({
            toggle: false
        });
    })
 	//menu for tablet/mobile scrolling
    $('.mobile-menu a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top 
        }, 800,'linear');
        event.preventDefault();
    });

//blog slider
$(".blog-slider").owlCarousel({
    navigation: true, // Show next and prev buttons
	navigationText: ['<span class="slide-nav inleft"><i class="fa fa-chevron-left"></i></span >', '<span class="slide-nav inright"><i class="fa fa-chevron-right"></i></span >'],
    slideSpeed: 400,
    paginationSpeed: 400,
    autoHeight: true,
    singleItem: true,
    pagination: false,
    transitionStyle: "fade"
});
//sticky navigation
$(window).bind("load", function () {
    $(".for-sticky").sticky({
        topSpacing: 0,
        className: 'animated'
    });
});

//script for navigation
    $('.menu-box .navigation ').superfish({
        delay: 400, //delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        }, // fade-in and slide-down animation
        animationOut: {
            opacity: 'hide',
            height: 'hide'
        },
        speed: 200, //  animation speed
        speedOut: 200,
        autoArrows: false // disable generation of arrow mark-up
    })
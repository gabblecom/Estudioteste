//running only in desktop
if (Modernizr.touch) {
    //home slider setting on touch device
    $(".slider").owlCarousel({
        navigation: false, // Hide next and prev buttons
        slideSpeed: 400,
        autoplay: false,
        pagination: true,
        paginationSpeed: 400,
        autoHeight: false,
        singleItem: true
    });
} else {
    $(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: false,
        responsive: true
    });
    //home slider setting on desktop
    $(".slider").owlCarousel({
        navigation: false, // Hide next and prev buttons
        slideSpeed: 400,
        autoplay: 6000,
        pagination: true,
        paginationSpeed: 400,
        autoHeight: false,
        singleItem: true,
        transitionStyle: "fadeUp"
    });
}


//google map load after all page finish
$(window).bind("load", function () {
    $('#map_canvas').gmap({
        'center': '-23.94357,-46.33072',
        'zoom': 15,
        scrollwheel: false,
        'disableDefaultUI': false,
        'styles': [{
            stylers: [{
                lightness: 7
            }, {
                saturation: -100
            }]
        }],
        'callback': function () {
            var self = this;
            self.addMarker({
                'position': this.get('map').getCenter(),
                icon: 'images/office-building.png',
            }).click(function () {
                self.openInfoWindow({
                    'content': 'Visite-nos <br> End.: Av. Sen. Pinheiro Machado, 22, CJ 42<br> Phone: 13 3225-2951 <br>Email: contato@gabblecomunicacao.com.br'
                }, this);
            });
        }
    });
}).load();




$(document).ready(function () {
    //Page scrolling
    $('.navigation').onePageNav({
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 0
    });
    //sticky navigation
    $(".for-sticky").sticky({
        topSpacing: 0,
        className: 'animated'
    });

});

//make the owl paginaton vertical aligned
var $control = $('.owl-pagination');
var height = $('.owl-pagination').height();
$(window).bind("load", function () {
    $control.height(height);
    $control.css('margin-top', -height / 2);

});


//add/remove active class in team nav
$(".team-nav").click(function (e) {
    $(".team-nav").parent().parent().removeClass("active");
    $(this).parent().parent().addClass("active");
});

//team scrolling
$(function () {
    $('.team-nav').bind('click', function (event) {
        var $anchor = $('#teamtab');

        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 110
        }, 300, 'linear');
        event.preventDefault();
    });
});

//isotope setting
var $container = $('.portfolio-body');

$container.imagesLoaded(function () {
    $container.isotope({});
});
$(window).on('resize', function () {
    $('.portfolio-body').isotope('reLayout');
});


// filter items when filter link is clicked
$('.port-filter a').click(function () {
    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector
    });
    return false;
});
$(".port-filter a").click(function (e) {
    $(".port-filter a").removeClass("active");
    $(this).addClass("active");
});

//portfolio ajax setting
$(document).ready(function () {
    $('.work-link').click(function () {

        var toLoad = $(this).attr('data-link') + ' .worksajax > *';
        $('.worksajax').fadeOut('slow', loadContent);
        $('#load').remove();
        $('body').append('<div id="load"><img class="img-loader" src="images/loading.gif"></div >');

        function loadContent() {
            $('.worksajax').load(toLoad, '', showNewContent);
            $('body').addClass('scroll-hidden');
        }

        function showNewContent() {
            $.getScript("js/portfolio.js");
            $('.worksajax').fadeIn('slow');
            $('#load').delay(600).fadeOut('fast');
        }
        return false;
    });
});

// Video responsive
$(".content").fitVids();

// script prettyphoto
$(document).ready(function () {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: 'data-rel',
        deeplinking: false
    });
});

//move to hash after loading
$(window).bind("load", function () {
    if (window.location.hash) {
        $('html, body').stop().animate({
            scrollTop: $(window.location.hash).offset().top
        }, 300, 'linear');
    }
});

//button scroll
$('.slider-link,.go-btn').bind('click', function (event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 800, 'linear');
    event.preventDefault();
});

//parallax ticker
$(".slider-para").list_ticker({
    speed: 5000,
    effect: 'fade'
});

//create menu for tablet/mobile
$(".header .navigation").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo($(".mobile-menu"));
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
$('.mobile-menu a').bind('click', function (event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 800, 'linear');
    event.preventDefault();
});


//count function	
$('.list-title').waypoint(function (direction) {
    $('.list-title').each(function () {
        counter = $(this).attr('data-count'),
        $(this).find('span').delay(6000).countTo({
            from: 50,
            to: counter,
            speed: 3000,
            refreshInterval: 50,
        });
    });
}, {
    offset: 'bottom-in-view',
    triggerOnce: true
});

//supersized (fullscreen) background setting
jQuery(function ($) {
    $.supersized({
        // Functionality
        slide_interval: 7000, // Length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 600, // Speed of transition

        // Components							
        slide_links: 'false', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides: [ // Slideshow Images
            {
                image: 'images/slider1.jpg'
            }, {
                image: 'images/slider2.jpg'
            }, {
                image: 'images/slider3.jpg'
            }
        ]

    });
});

//preloader
$(window).bind("load", function () { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
})
$(document).ready(function () {


    // Banner Slider
    $('.slider-active').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Project Images
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Counter JS
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Video Js
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    // Testmonial JS
    $('.testimonial').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    // Brand Images
    $('.brand-img').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });



});


// Sticky JS
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
        $('.header-area').addClass("sticky");
    } else {
        $('.header-area').removeClass("sticky");
    }
});
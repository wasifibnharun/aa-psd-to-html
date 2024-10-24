// JS Codes
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    spaceBetween: 24,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  });

var mixer = mixitup('.mixitupContainer');

new WOW().init();

// JQuery Codes

$(document).ready(function () {
    
    $(window).on('load', function () {
        $('.preloaderArea').fadeOut(500)
    })

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 600) {
            $('.navbar').addClass('scrollColor')
            $('.backToTop').show(500)
        }
        else {
            $('.navbar').removeClass('scrollColor')
            $('.backToTop').hide(500)
        }
    })

    $('.backToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 700)
    })
    
    $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
    });
})
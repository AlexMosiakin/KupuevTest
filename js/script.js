let menuWrapper = $("header");
let menu = $(".menu-wrapper");
let mainh = $(".main-screen").outerHeight();
$(window).scroll(function() {
    let top = $(this).scrollTop();
        if (top >= mainh) {
            menuWrapper.addClass("menu-fixed");
            menu.addClass("menu-margin");
            // let menuWrapper = document.createElement("div");
            // menuWrapper.classList.add("menu-wrapper");
            // menu.wrap(menuWrapper);
        } else if (top <= mainh) {
            menuWrapper.removeClass("menu-fixed");
            menu.removeClass("menu-margin");
            // menuWrapper.remove();
        }
});

// let html = $("html");
// let cards = document.querySelector(".hor-scroll-cards-wrapper");
// let cardsWidth = $(".hor-scroll-cards-wrapper").outerWidth();
// $(window).on('scroll', () => { // По скроллу страници запускаеть функия
//     // В первую переменную мы получаем координаты относительно верха блока который нам нужен
//     // Во вторую мы получаем вертикальную позиицию скролла окна браузера
//       let blockPosition = $('.hor-scroll').offset().top;
//       windowScrollPosition = $(window).scrollTop();
//       let windowScrollPositionBottom = $(window).scrollTop() + $(window).height();
//       let step = 100;
//       $(window).bind('mousewheel', (e) => {
//             if( blockPosition < windowScrollPosition) {
//             html.addClass("stop-scroll");
//             if (e.originalEvent.wheelDelta >= 0) {
//                 step = step - 100;
//                 cards.style.transform = `translateX(`+ -step +`px)`;
//             }
//             else {
//                 step = step + 100;
//                 cards.style.transform = `translateX(`+ -step +`px)`;
//                 if(step > cardsWidth){
//                     html.removeClass("stop-scroll");
//                     cards.style.transform = `translateX(`+ -cardsWidth +`px)`;
//                     cardsWidth = 0;
//                     $(".hor-scroll-cards-wrapper").addClass('going-down')
//                 }
//             }
//         }

//         // let step = 100;
//         // step = step + 100;
//         // console.log(step);
//        });
//   });

$('.teachers-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["<img src='./img/arrowSliderLeft.svg'>", "<img src='./img/arrowSliderRight.svg'>"],
    dots:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 45,
        },
        450:{
            items:3,
            stagePadding: 45
        },
        769:{
            items:4
        },
        1024:{
            items:4
        }
    }
});

$('.review-cards').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["<img src='./img/arrowSliderLeft.svg'>", "<img src='./img/arrowSliderRight.svg'>"],
    dots:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 30,
        },
        450:{
            items:1,
            stagePadding: 80,
        },
        769:{
            items:2
        },
        1024:{
            items:2
        }
    }
});


// $(".question-item").click(function(e) {
//     e.preventDefault();
//     $(this).addClass('current').siblings().removeClass('current').closest('div.questions-list')
//         .find('.question-text').slideUp().eq($(this).index()).slideDown();
// });

$(".question-item").click(function(e) {
    e.preventDefault();
    let currentCardObject = $(this);
    let currentCard = currentCardObject[0];
    if(currentCard.classList.contains('current')){
        $(this).removeClass('current').children('.question-text').slideUp();
        $(this).children('.question-header').children('p').removeClass('orange');
        $(this).children('.question-header').children('.question-circle').children('.line2').removeClass('line2-hide');
    }
    else{
        $(this).addClass('current').siblings().removeClass('current').closest('div.questions-list')
        .find('.question-text').slideUp().eq($(this).index()).slideDown();
        $(this).children('.question-header').children('p').addClass('orange');
        $(this).siblings().children('.question-header').children('p').removeClass('orange');
        $(this).children('.question-header').children('.question-circle').children('.line2').addClass('line2-hide');
        $(this).siblings().children('.question-header').children('.question-circle').children('.line2').removeClass('line2-hide');
    }
});

$(".menu-mob-link").click(function() {
    $(".menu-mobile").removeClass("menu-hide");
    $(".menu-overlay").addClass("menu-overlay-active");
});

$(".menu-close").click(function() {
    $(".menu-mobile").addClass("menu-hide");
    $(".menu-overlay").removeClass("menu-overlay-active");
});

$(".lesson-card-phys").click(function() {
    $(".phys-lesson").removeClass("player-wrapper-disable");
    $(".liter-lesson").addClass("player-wrapper-disable");
    $(".alg-lesson").addClass("player-wrapper-disable");

    $(".lesson-card-phys").addClass("lesson-card-active");
    $(".lesson-card-liter").removeClass("lesson-card-active");
    $(".lesson-card-alg").removeClass("lesson-card-active");
});

$(".lesson-card-liter").click(function() {
    $(".liter-lesson").removeClass("player-wrapper-disable");
    $(".phys-lesson").addClass("player-wrapper-disable");
    $(".alg-lesson").addClass("player-wrapper-disable");

    $(".lesson-card-liter").addClass("lesson-card-active");
    $(".lesson-card-phys").removeClass("lesson-card-active");
    $(".lesson-card-alg").removeClass("lesson-card-active");
});

$(".lesson-card-alg").click(function() {
    $(".alg-lesson").removeClass("player-wrapper-disable");
    $(".liter-lesson").addClass("player-wrapper-disable");
    $(".phys-lesson").addClass("player-wrapper-disable");

    $(".lesson-card-alg").addClass("lesson-card-active");
    $(".lesson-card-liter").removeClass("lesson-card-active");
    $(".lesson-card-phys").removeClass("lesson-card-active");
});


$(".about-span1").click(function() {
    $(".about-photo1").removeClass("about-photo-disable");
    $(".about-photo2").addClass("about-photo-disable");
    $(".about-photo3").addClass("about-photo-disable");
});
$(".about-span2").click(function() {
    $(".about-photo2").removeClass("about-photo-disable");
    $(".about-photo1").addClass("about-photo-disable");
    $(".about-photo3").addClass("about-photo-disable");
});
$(".about-span3").click(function() {
    $(".about-photo3").removeClass("about-photo-disable");
    $(".about-photo2").addClass("about-photo-disable");
    $(".about-photo1").addClass("about-photo-disable");
});

$(".link").click(function() {
    $(".menu-link img").toggleClass("arrow-rotate");
    $(".drop-down").toggleClass("drop-down-active");
});

$('.lib-link').on('click', function() {
    $('html,body').animate({scrollTop:$('.library-section').offset().top+"px"},{duration:1E3});
});
$('.teach-link').on('click', function() {
    $('html,body').animate({scrollTop:$('.teachers-section').offset().top+"px"},{duration:1E3});
});
$('.rev-link').on('click', function() {
    $('html,body').animate({scrollTop:$('.review-section-wrapper').offset().top+"px"},{duration:1E3});
});
$('.price-link').on('click', function() {
    $('html,body').animate({scrollTop:$('.price-section-wrapper').offset().top+"px"},{duration:1E3});
});
$('.arrowUp').on('click', function() {
    $('html,body').animate({scrollTop:$('.main-screen').offset().top+"px"},{duration:1E3});
});

// $(".review-open").click(function() {
//     let currentReviewObj = $(this);
//     let currentReview = currentReviewObj[0];
//     if(currentReview.classList.contains('review-open-active')){
//         $(this).parent('.review-item').children('.review-text').children('p').removeClass("review-text-active");
//         $(this).parent('.review-item').children('.review-text').children(".review-hide-text").removeClass("review-open-text");
//         $(this).removeClass("review-open-active");
//         $(this).innerText="закрыть";
//     }else{
//         $(this).parent('.review-item').children('.review-text').children('p').addClass("review-text-active");
//         $(this).parent('.review-item').children('.review-text').children(".review-hide-text").addClass("review-open-text");
//         $(this).addClass("review-open-active");
//         $(this).innerText="читать полностью";
//     }
// });


// $(".question-item").click(function(e) {
//     e.preventDefault();
//     $(this).children('.question-header').children('p').addClass('orange');
//     $(this).siblings().children('.question-header').children('p').removeClass('orange');
// });


function findVideos() {
    let videos = document.querySelectorAll('.player-wrapper');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.player-wrapper img');
    let media = video.querySelector('.player-wrapper img');
    let button = video.querySelector('.player-wrapper button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();



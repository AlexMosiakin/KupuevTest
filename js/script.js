$('.teachers-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["<img src='./img/arrowSliderLeft.svg'>", "<img src='./img/arrowSliderRight.svg'>"],
    dots:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        2560:{
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
            items:2
        },
        600:{
            items:2
        },
        2560:{
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


// $(".question-item").click(function(e) {
//     e.preventDefault();
//     $(this).children('.question-header').children('p').addClass('orange');
//     $(this).siblings().children('.question-header').children('p').removeClass('orange');
// });



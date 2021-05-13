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
})
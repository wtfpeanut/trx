$("a").click(function (event) {
    event.preventDefault();
    $("#subscribe").click(function (event) {
        event.preventDefault();
    })
});


$('.carousel').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

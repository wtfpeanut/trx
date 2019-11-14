// Prevent Default dos links

$("a").click(function (event) {
    event.preventDefault();
    $("#subscribe").click(function (event) {
        event.preventDefault();
    })
});

// Slick Js

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

// Modal de pesquisa

// var modal = document.getElementsByClassName("search__results");
// var btn = document.getElementsByClassName("search__btn");
// var span = document.getElementsByClassName("icon-close")[0];
// btn.onclick = function () {
//     modal.style.display = "block";
// }
// span.onclick = function () {
//     modal.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
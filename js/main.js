// ============= Prevent Default dos links =============

$("a").click(function (event) {
    event.preventDefault();
    $("#subscribe").click(function (event) {
        event.preventDefault();
    })
});

// ============= Slick Js =============

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
    prevArrow: $('.icon-left-arow'),
    nextArrow: $('.icon-righ-arow'),
});



// ============= Modal de pesquisa =============
$(function () {
    $('.search__btn').on('click', function () {
        $('.search__modal').css('display', 'flex');
    });
    $('.close__btn').on('click', function () {
        $('.search__modal').css('display', 'none');
    });
});

$(function () {
    $('.filter__btn').on('click', function () {
        $('.filter__modal').css('display', 'flex');
    });
    $('.filter__close').on('click', function () {
        $('.filter__modal').css('display', 'none');
    });
});


// $(function () {
//     $('.icon__btn').mouseenter(function () {
//         $('.bag__container').css('display', 'flex');
//     });
//     $('.bag__products').mouseleave(function () {
//         $('.bag__container').css('display', 'none');
//     });
// });














function products() {
    let output = "";

    array.forEach(item => {
        output += `
        <div class="items--card">
        <img class="card" src="${item.dataimg}">
        <div class="items--discount" src="${item.dataimg}"></div>
        <p class="old--price">R$ ${item.oldprice}</p>
        <p class="new--price">R$ ${item.newprice}</p>
        <p class="color">R$ ${item.color}</p>
        <p class="size">R$ ${item.size}</p>
        </div>`;
    });
    document.getElementsByClassName("items").innerHTML = output;
}
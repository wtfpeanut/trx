$(document).ready(function () {

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
        autoplay: true,
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
            $('.search__modal').fadeIn('slow', function () {
                $('.search__modal').css('display', 'flex');
            });
        });
        $('.close__btn').on('click', function () {
            $('.search__modal').fadeOut('slow', function () {
                $('.search__modal').css('display', 'none');
            });
        });
    });

    // ============= Modal de filtro =============

    $(function () {
        $('.filter__btn').on('click', function () {
            $('.filter__modal').fadeIn('slow', function () {
                $('.filter__modal').css('display', 'flex');
            });
        });
        $('.filter__close').on('click', function () {
            $('.filter__modal').fadeOut('slow', function () {
                $('.filter__modal').css('display', 'none');
            });
        });
    });

    $('.filter__close').click(function () {
        $(this).siblings('.filter__content').children(".icon-down-arow").toggleClass('icon-down-arow--active')
    })

    // ============= Limpa os inputs do filtro =============

    $(".filter__clean").click(function () {
        $("input").prop("checked", false);
        $('.size__value').html(" ");
    });

    // ============= Replica o que for digitado na pesquisa =============

    input.oninput = function () {
        result.innerHTML = input.value;
    };
    // ============= Reseta o campo de input quando o foco estiver no campo novamente =============

    $('input:text').click(function () {
        $(this).val(' ');
        $('#result').html(' ');
    });

    $('.icon-close').on("click", function () {
        $('.search__modal').fadeOut('slow', function () {
            $('#result').html(' ');
            $('.form-control').val(' ');
        });
    });

    //  ============= Setas do accordion  =============

    $(".filter__content").on("click", function (e) {
        e.preventDefault(),
            e.stopPropagation(),
            $(this).children(".filter__sizes").children(".icon-down-arow").toggleClass('icon-down-arow--active'),
            $(this).siblings(".filter__contents").toggleClass("filter__contents--active")
    });


    //  ============= Mostra o número de checkbox selecionados no tamanho  =============

    $(document).ready(function () {

        $(".contents").click(function () {
            var numberOfChecked = $('.input__size:checked').length;

            $('.size__value').text(numberOfChecked);
            $('.input__size:checked').change(function () {

                var numberOfChecked = $('.input__size:checked').length;
                $('.size__value').text(numberOfChecked);
            });
        });
    });

    $('.btn--card').click(function () {
        var color = $(this).attr("data-color");
        var size = $(this).attr("data-size");
        var old = $(this).attr("data-old");
        var newPrice = $(this).attr("data-newPrice");

        console.log(color);
        console.log(size);
        console.log(old);
        console.log(newPrice);

    });

    function showCart() {
        let output = "";

        array.forEach(item => {
            output += `
            <div class="result__items">
                <img class="result__img" src="${item.dataimg}">
                <p class="result__name" src="${item.name}"></p>
                <p class="result__newPrice" src="${item.newPrice}"></p>
                <p class="result__old" src="${item.old}"></p>
                <p class="result__color" src="${item.color}"></p>
                <p class="result__size" src="${item.size}"></p>
            </div>`;
        });
        document.getElementsByClassName('bag__products').innerHTML = output;
    }

});
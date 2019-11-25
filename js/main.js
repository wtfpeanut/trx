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

    // ============= Limpa os inputs do filtro =============

    $(".filter__clean").click(function () {
        $("input").prop("checked", false);
        $('.size__value').html(" ");
    });


    // ============= Replica o que for digitado na pesquisa =============

    $(".form-control").bind("keyup paste", function () {
        $(".search__result").val($(this).val());
    });

    // ============= Reseta o campo de input quando o foco estiver no campo novamente =============

    $('input:text').focus(
        function () {
            $(this).val('');
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


});
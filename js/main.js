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

    var acc = document.getElementsByClassName("filter__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            $(".icon-down-arow").toggleClass("icon-down-arow--active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "flex") {
                panel.style.display = "none";
            } else {
                panel.style.display = "flex";
            }

        });
    }


});
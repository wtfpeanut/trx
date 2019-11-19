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

    $(".form-control").bind("keyup paste", function () {
        $(".search__result").val($(this).val());
    });

    // $(function () {
    //     $('.icon__btn').mouseenter(function () {
    //         $('.bag__container').css('display', 'flex');
    //     });
    //     $('.bag__products').mouseleave(function () {
    //         $('.bag__container').css('display', 'none');
    //     });
    // });

    // ============= Reseta o campo de input quando o foco estiver no campo novamente =============

    $('input:text').focus(
        function () {
            $(this).val('');
        });

    var coll = document.getElementsByClassName("filter__size");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

});
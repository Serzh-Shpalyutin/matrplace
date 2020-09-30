$(function () {
    
    $('.slider__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.main__title--slider'),
        // prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        // nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    $('.filter__menu-drop').on('click', function(){
        $('.drop-down__list').slideToggle();
    });

    $(function () {
        var mixer = mixitup('.products__box'); 
    });


});
$(function () {
    
    $('.slider__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.main__title--slider'),
    });

    $('.filter__menu-drop').on('click', function(){
        $('.drop-down__list').slideToggle();
    });

    $(function () {
        var mixer = mixitup('.products__box'); 
    });


});
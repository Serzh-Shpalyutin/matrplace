$(function () {
    
    $('.weekly__inner').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        appendArrows: $('.weekly__title--slider'),
    });

    $('.filter__menu-drop').on('click', function(){
        $('.drop-down__list').slideToggle();
    });

    $(function () {
        var mixer = mixitup('.products__box'); 
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
        spacing   : "5px"
      });

});
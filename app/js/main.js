$(function () {
    
    $('.weekly__inner').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        appendArrows: $('.title--slider'),
    });

    $('.filter__menu-drop').on('click', function(){
        $('.drop-down').slideToggle();
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

      $('.followers__items').slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      });

});
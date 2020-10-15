$(function () {

    $('.weekly__inner').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        prevArrow: "<img src='../images/icons/prev.png' class='.weekly__prev' alt='prewies'>",
        nextArrow: "<img src='../images/icons/next.png' class='.weekly__next' alt='next'>"
    });

    $('.filter__menu-drop').on('click', function () {
        $('.drop-down').slideToggle();
    });

    $(function () {
        var mixer = mixitup('.products__box');
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
        spacing: "5px"
    });

    $('.followers__items').slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });

    $('.feedback__items').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false,
        dots: false
    });

});
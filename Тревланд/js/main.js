$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='img/ar-left.svg' alt='ar-left'></button>",
        nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='img/ar-right.svg' alt='ar-right'></button>"
    });

  $(".mobile-menu").click(function(){
    $(".mobile-menu span").toggleClass('active');
    $(".menu ").toggleClass('active');
    })
});
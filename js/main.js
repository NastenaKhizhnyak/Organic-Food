$(document).ready(function () {
    $(".customer-starts").starRating({
        totalStars: 5,
        strokeColor: '#F18908',
        ratedColor: '#F18908',
        strokeWidth: 20,
        starSize: 23,
        readOnly: true
      });

    //   slider

    $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="btn slider-btn slider-prev"></button>',
        nextArrow: '<button class="btn slider-btn slider-next active"></button>',
    });
       
    $(".slider-btn").click(function(){
        $(".slider-btn").removeClass("active");
        $(this).addClass("active")


    });

    
});

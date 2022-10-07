import $ from "jquery";
import "slick-carousel";

$(document).ready(function () {
  $(".success-slick-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    fade: true,
    asNavFor: ".success-slick-slider",
  });
  $(".success-slick-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    asNavFor: ".success-slick-image",
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/icons/previous.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/icons/next.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".reviews-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/icons/previous.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/icons/next.png"></button>',
  });
});

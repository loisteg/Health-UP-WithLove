import $ from "jquery";
import "slick-carousel";

$(document).ready(function () {
  $(".success-slick-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".success-slick-slider",
  });
  $(".success-slick-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".success-slick-image",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
  $(".reviews-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});

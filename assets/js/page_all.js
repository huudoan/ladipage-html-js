/*!
 * thuynt
 * 
 * 
 * @author thuynt
 * @version 2.0.0
 * Copyright 2021. MIT licensed.
 */$(document).ready(function () {
  $(".loading-start").hide();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    allowTouchMove: false,
    autoplay: {
      delay: 9000
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        allowTouchMove: true,
        loop: true
      }
    }
  });
  var swiper = new Swiper(".box-comment-mb", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 15000
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  $("#btn-close-ads").click(function () {
    $(".box-ads-header").addClass('close-ads');
  });
});
$(function () {
  set_($('#number-max'), 100); //return 3 maximum digites

  function set_(_this, max) {
    var block = _this.parent();

    block.find(".increase").click(function () {
      var currentVal = parseInt(_this.val());

      if (currentVal != NaN && currentVal + 1 <= max) {
        _this.val(currentVal + 1);

        $('#total-order').val((currentVal + 1) * parseInt(price));
      }
    });
    block.find(".decrease").click(function () {
      var currentVal = parseInt(_this.val());

      if (currentVal != NaN && currentVal != 0) {
        _this.val(currentVal - 1);

        $('#total-order').val((currentVal - 1) * parseInt(price));
      }
    });
  }
});
$(function () {
  $(".input-number").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      $("#errmsg").html("Chỉ nhập số").stop().show().fadeOut("slow");
      return false;
    }
  });
});
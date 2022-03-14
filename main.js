"use strict";

$(function () {
  // mv-slide-in
  $(".js-wipe").addClass("is-active");

  // back-to-top
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $("#btt").addClass("is-active");
    } else {
      $("#btt").removeClass("is-active");
    }
  });

  $("#btt").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  // header固定
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $("#header").addClass("is-active");
    } else {
      $("#header").removeClass("is-active");
    }
  });

  // slideshow
  // let nowPage = 0;
  // let nextPage = 1;
  // const slides = $("#slideshow img");
  // const slideLength = slides.length;
  // const fadeTime = 1500;
  // const showTime = 4000;
  // slides.hide();
  // slides.eq(0).show();

  // const slideshow = () => {
  //   slides.eq(nowPage).fadeOut(fadeTime);
  //   slides.eq(nextPage).fadeIn(fadeTime);
  //   nowPage = nextPage;
  //   nextPage = (nextPage + 1) % slideLength;
  // };
  // setInterval(slideshow, showTime);

  // hamburger
  $("#hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".header-nav").fadeToggle();
    $("body").toggleClass("is-active");
  });
});

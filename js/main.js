$(function () {
  let currentIndex = 0;
  $(".slider_wrap").append($(".slide1").first().clone(true));

  setInterval(function () {
    currentIndex++;
    $(".slider_wrap").animate({ marginLeft: -currentIndex * 100 + "%" }, 600);

    if (currentIndex == 3) {
      setTimeout(function () {
        $(".slider_wrap").animate({ marginLeft: 0 }, 0);
        currentIndex = 0;
      }, 700);
    }
  }, 3000);

  let tabBtn = $(".tab_title > li");
  let tabCont = $(".tab_contents > div");

  tabCont.hide().eq(0).show();

  tabBtn.on("click", function () {
    const index = $(this).index();
    tabCont.eq(index).show().siblings().hide();
  });

  lnbBtn.on("mouseover", function () {
    $("nav, .lnb").addClass("on");
  });

  lnbBtn.on("mouseout", function () {
    $("nav, .lnb").removeClass("on");
  });

  // toggleClass 클래스를 추가하거나 제거
  $(".gnb > li:nth-child(1)").on("click", function () {
    $("nav, .lnb").toggleClass("on");
  });

  lnbBtn.on("mouseover", function () {
    $(this).css({ background: "var(--color-1)", color: "var(--font-color" });
  });

  lnbBtn.on("mouseout", function () {
    $(this).css({background: "none", color: "#000"});
  });

  $(".gnb > li:nth-last-child(1)").on("click", function () {
    selectWind.toggleClass("se");
  });
});

let menuTogg = 0;

let selectWind = $("nav, nav > form");

let lnbBtn = $(
  ".gnb > li:nth-child(2), .gnb > li:nth-child(2) li, .gnb > li:nth-child(3), .gnb > li:nth-child(3) li, .gnb > li:nth-child(4), .gnb > li:nth-child(4) li, .gnb > li:nth-child(5), .gnb > li:nth-child(5) li, .gnb > li:nth-child(6), .gnb > li:nth-child(6) li"
);

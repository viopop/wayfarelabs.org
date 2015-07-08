$(function() {
  $('.big-slide-link').bigSlide({
    menu: "#big-slide-panel",
    push: ".big-slide-push",
    side: "right",
    easyClose: true});
});

$(document).on("click", "[data-scroll-to]", function(e) {
  var scrollTo = $(e.target).data("scroll-to");
  if (!scrollTo) return;
  $("html, body").animate({
    scrollTop: $(scrollTo).offset().top
  }, 650);
});

jQuery(function ($) {
  var scroll =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  var elementsToShow = $(".show-on-scroll");

  function loop() {
    Array.prototype.forEach.call(elementsToShow, function (element) {
      if (isElementInViewport(element)) {
        $(element).addClass("is-visible");
      } else {
        $(element).removeClass("is-visible");
      }
    });

    scroll(loop);
  }

  loop();

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  $(".navbar-nav .nav-item a").click(function () {
    $(this).closest(".nav-item").siblings().removeClass("active");
    $(this).closest(".nav-item").addClass("active");
  });
});

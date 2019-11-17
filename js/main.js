$(document).ready(function () {

  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
  });

  $(".slide-one").owlCarousel({
    nav: true,
    navText: ['<', '>'],
    loop: true,
    margin: 10,
    items: 1,
    dots: false,
  });
  $(".slide-two").owlCarousel({
    nav: true,
    navigation: true,
    navText: ['<', '>'],
    loop: true,
    center: true,
    items: 3,
    dots: false,
    responsiveClass: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 3,
      },
    }
  });
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
});
$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-fixed");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
/* global bootstrap: false */
(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(".open-btn").on("click", function () {
  $(".sidebar").addClass("active");
});

$(".close-btn").on("click", function () {
  $(".sidebar").removeClass("active");
});

$(".toggle-btn").on("click", function () {
  if ($(".sidebar").hasClass("active")) {
    $(".sidebar").removeClass("active");
  } else {
    $(".sidebar").addClass("active");
  }
});

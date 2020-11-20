$(document).on("click", ".main-menu a", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

function slowScroll(id) {
  var offset = 88;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset
    },
    300
  );
  return false;
}

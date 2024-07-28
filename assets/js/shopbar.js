// if < then 768
// mobile sorting overlay jquery start
const mediaQuerymobile = window.matchMedia("(max-width: 768.98px)");

if (mediaQuerymobile.matches) {
  $(".sort-drop").on("show.bs.dropdown", function () {
    $(".overlay").show();
  });
  $(".sort-drop").on("hide.bs.dropdown", function () {
    $(".overlay").hide();
  });
}
//  mobile sorting overlay jquery end

// mobile filter jquery start

$(".filter-btn").click(function () {
  $(".sidebar").addClass("open");
  $("body").addClass("overflow-hidden vh-100");
});
$(".filter-close-btn").click(function () {
  $(".sidebar").removeClass("open");
  $("body").removeClass("overflow-hidden vh-100");
});
// mobile filter jquery end

// sidebar sticky
 const mediaQuerySM = window.matchMedia('(min-width: 768px)')
      // if > then = to 768
      if (mediaQuerySM.matches) {
        // sidebar sticky function
         var sidebar = new StickySidebar('.sidebar', {
          topSpacing: 80,
          bottomSpacing: 20,
          containerSelector: '.main-content',
          innerWrapperSelector: '.sidebar__inner'
        });
      }
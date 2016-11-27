// Include modules into the html file
// Pathes may need altered depending on site structure
$(function () {
  $("#page-header").load("../modules/header.html");
  $("#page-nav").load("/jsonweather-html/modules/navigation.html");
  $("#footer-content").load("../modules/footer.html");
});

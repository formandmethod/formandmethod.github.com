$(document).ready(function() {
  $("#header li a").click(function() {
    link = $(this).attr("href");
    offset = $(link).offset();
    adjustedOffset = offset.top - 100;
    $.scrollTo(adjustedOffset, 500);
    return false;
  });
});
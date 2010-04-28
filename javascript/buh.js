$(document).ready(function() {
  $(".scroll_to").click(function() {
    link = $(this).attr("href");
    offset = $(link).offset();
    adjustedOffset = Math.max(offset.top - 100, 0);
    $.scrollTo(adjustedOffset, 500);
    return false;
  });
});
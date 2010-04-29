$(document).ready(function() {
  if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
    $("html").addClass("iDevice");
  }
  else {
    $(".scroll_to").click(function() {
      link = $(this).attr("href");
      offset = $(link).offset();
      adjustedOffset = Math.max(offset.top - 100, 0);
      $.scrollTo(adjustedOffset, 500);
      return false;
    });
  }
});
$(document).ready(function() {
  $("button#cat").click(function() {
    $("#col1").prepend("<li>MEOW!</li>");
    $("#col2").prepend("<li>BARK!</li>");
  });

  $("button#dog").click(function() {
    $("#col2").prepend("<li>BARK!</li>");
    $("#col1").prepend("<li>MEOW!</li>");
  });
});

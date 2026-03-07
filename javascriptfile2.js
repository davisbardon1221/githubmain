
   function dadasdwqerewqaasd(name) {
  name = name.replace(/[\[]/g, "\\[").replace(/[\]]/g, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  return decodeURIComponent(results[1].replace(/\+/g, " "));
}
var bcda = dadasdwqerewqaasd("bcda");
$(document).ready(function() {
  $(".bcda").text(bcda);
});
  
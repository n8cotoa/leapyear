$(document).ready(function() {
  $("#yearSubmit").click(function(event) {
    var yearInput = $("input#userInput").val();
    if ((yearInput%4 === 0) && (yearInput%100 !== 0) || (yearInput%400 === 0)) {
      alert("yay, it's a leap year")
    } else {
      alert("nope, not a leap year")
    };
  });
});

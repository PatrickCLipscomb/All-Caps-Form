$(function() {
  $("#blanks form").submit(function(event) {
    var lowerInput = $('input#lower').val();
    $(".lower").text(lowerInput.toUpperCase());

    $("#yell").show();
    event.preventDefault();



  });

});

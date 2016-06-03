$(document).ready(function() {
  $("button#matchSubmit").click(function(event) {
    var food = $("#food").val();
    var gender = $("#gender").val();
    var age = parseInt($("input#age").val());

    $("#guyFerrariText").hide();
    $("#marioBataliText").hide();
    $("#rachaelRayText").hide();
    $("#paulaDeenText").hide();

    if (age) {
      $("#ageOption").removeClass("has-error").addClass("has-success");
      $(".help-inline").hide();
      if (age >= 50 && gender === 'Male' && food === 'Steak') {
        $("#paulaDeenText").show();
      }
      else if (age <= 50 && gender === 'Male' && food === 'Salad') {
        $("#rachaelRayText").show();
      }
      else if (age >= 50 && gender === 'Female' && food === 'Lasagna') {
        $("#marioBataliText").show();
      }
      else {
        $("#guyFerrariText").show();
      }
    }
    else if (isNaN(age)) {
      $(".help-inline").show();
    }
    event.preventDefault();
  });

});

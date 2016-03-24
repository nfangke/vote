$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

    if (height <= 48) {
      $(".childRiders").addClass("childBackground");
    } else if (height < 71){
      $(".allRiders").addClass("allBackground");
    } else {
      $(".adultRiders").addClass("adultBackground");
    }

  });

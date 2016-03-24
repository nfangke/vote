$(document).ready(function() {
  var age = parseInt(prompt("Age?"));

  if (age < 18) {
    $("#under-18").show();
  } else {
    $("#vote").show();  
  }

});

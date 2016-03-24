

$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();

  var a = parseInt($("#a").val());
  var b = parseInt($("#b").val());
  var c = parseInt($("#c").val());

  if (((a+b) <= c) || ((b+c) <= a) || ((a+c) <= b)) {
    $(".notTriangle").show();

  } else if (a!=b && b!=c) {
    $('.scalene').show();

  } else if (a===b && b===c) {
    $('.equilateral').show();

  } else if ((a===b && a!=c) || (a===c && c!=b) || (c===b && c!=a)) {
    $('.isosceles').show();
  }

  });
});

var add = function(question1Input, flavor) {
  return question1Input + flavor;
}

$(document).ready(function() {
  $("form").submit(function(event){
    (event).preventDefault();

    var question1Input = $("#question1").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var question1Input = parseInt(question1Input);
    var flavor = parseInt(flavor);
    var result = add(question1Input, flavor);
    
    if (result === 10) {
      $(".result").show();
    } else {
      $(".result2").show();
    }

    // if ((question1Input === "1" || question1Input === "2") && (flavor === "0")) {
    //   $(".result").show();
    // } else {
    //   $(".result2").show();
    // }


    // if (question1Input === "1" || question1Input === "2"){
    //   $(".result").show();
    // } else {
    //   $(".result2").show();
    // }

    // if (flavor === "0" || flavor === "20" ){
    //   $(".result").show();
    // } else {
    //   $(".result2").show();
    // }

    // if (question1Input === "option1" || question1Input === "option2" ) {
    //   $(".result").show();
    // } else {
    //   $(".result2").show();
    // }

  });
});

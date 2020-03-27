$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#output").fadeToggle(result);
    event.preventDefault();

  var result1 = $("input[name=questionOne]:checked").val();

  var result2 = $("input[name=questionTwo]:checked").val();

  var result3 = $("input[name=questionThree]:checked").val();

  var result4 = $("input[name=questionFour]:checked").val();

  var result5 = $("input[name=questionFive]:checked").val();
  
  var result6 = $("input[name=questionSix]:checked").val();
  var result;


  if (result1 != result2 && result3 === result4) {
      result = "Try out the cool stylings of HTML with CSS and express yourself!"
  }
    else if (result3 === result4 && result2 === result3) {
      result = "Some refer to it as a Cruel Mistress, but it could be love at first sight with JavaScript! and don't forget to try out Jquery!"
  }
    else if (result1 === result2) {
    result = "You seem chill, you could probably choose whichever language you like.  Did you know Swift is a compiled programming language developed by Apple(TM)?"
  }
    else if (result3 === result5 && result5 === result6) {
      result = "Why don't you give the general-purpose programming language, Ruby a try!  It was developed by Yukihiro Matsumoto in the mid-90s"
    }
  $("#output").text(result);

  });
});
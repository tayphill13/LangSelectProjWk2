$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();

  var result1 = $("input[name=questionOne]:checked").val();

  var result2 = $("input[name=questionTwo]:checked").val();

  var result3 = $("input[name=questionThree]:checked").val();

  var result4 = $("input[name=questionFour]:checked").val();

  var result5 = $("input[name=questionFive]:checked").val();
  
  var result6 = $("input[name=questionSix]:checked").val();
  var result;

  // var result6 

  if (result1 === result2 || result2 === result5) {
      result = "Try out the cool stylings of HTML with CSS and express yourself!"
  }
    else if (result3 === result4) {
      result = "You might consider the Cruel Mistress that is JavaScript, and don't forget to try out Jquery!"
  }
    else if (result4 === result5) {
      result = "You seem chill, you could probably choose whichever language you like.  Did you know Swift is a compiled programming language developed by Apple?"
  }
    else if (result === result) {
      result = "Why don't you give the general-purpose programming language, Ruby a try!  It was developed by Yukihiro Matsumoto in the mid-90s"
    }
      // else if ()
  $("#output").text(result);
  });
});
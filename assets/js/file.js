 //Append un text au text area
$(document).ready(function(){
    $("#button1").click(function(){
      $("textarea").append(" hello");
    });
});
/*
//change le bordure de
$('#button1').click(function() {
    $('textarea').css('border', '2px solid red');
    $('p').css('border', '2px solid red');
  });
*/
  $('#button1').click(function () {
    $("textarea").add("p").css("border", "2px solid red");
});



//exo 2





    $("p").last().addClass("w3r_font_color");



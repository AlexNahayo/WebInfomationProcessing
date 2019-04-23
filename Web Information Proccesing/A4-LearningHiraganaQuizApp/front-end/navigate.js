// help from : https://stackoverflow.com/questions/5375449/how-to-hide-a-div-with-jquery
// hide button : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show

$(document).ready(function() {
    $(".grid").hide();
});

$(document).ready(function () {
    $('.mbtn3').click(function () {
        $(".mbtn3").hide();
        $(".quizTable").hide();
        
        $(".grid").fadeToggle('fast');
    });
});



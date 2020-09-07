window.setTimeout(function() {
alert("Hello Brand");
$("h1").text("jQuery is Working"); 
$("em").parents().css({"color": "red", "border": "2px solid red"});
$("em").parent().css({"color": "blue", "border": "2px solid red"});


}, 500);
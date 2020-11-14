window.setTimeout(function() {
alert("Hello Brand");
$("h1").text("jQuery is Working");


var textColorReq = "blue";

$("#button1").click(function() {
    textColorReq = "blue";
    setTextColor ();
});

$("#button2").click(function() {
    textColorReq = "green";
    setTextColor ();
});

function setTextColor (){
var textColor = (textColorReq == "green") ? "green" : "blue";
if (textColor == "green") {
    $("h1").css("color", "green");
  } else {
    $("h1").css("color", "blue");
  } 
};










}, 500);
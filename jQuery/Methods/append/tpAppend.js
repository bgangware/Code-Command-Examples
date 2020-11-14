window.setTimeout(function() {
alert("Hello Brand");
$("h1").text("jQuery is Working"); 

// This is an example of append.  This code is adding to div boxes to two existing boxes.
$( ".box" ).append( "<div class='container item1'>div 3</div>" );
var appText = "div 4";
var appTextIns = "<div class='container item1'>" + appText + "</div>";
console.log(appTextIns);
$( ".box" ).append( appTextIns);



}, 500);
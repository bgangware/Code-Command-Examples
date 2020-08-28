window.setTimeout(function() {
alert("Hello");

// This shows examples for the following methods
//      attr()
   
$("img").css("width","200px");

// This demonstrates how to change the image using the attr method (img) selecting the first element.
$("img").first().attr("src","Lana.jpg");

// This demonstrates how to change the image using the attr method (img) selecting the last element 
$("img").last().attr("src","Lana.jpg");



}, 500);
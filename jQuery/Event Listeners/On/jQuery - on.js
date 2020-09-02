window.setTimeout(function() {
alert("Hello");

// Using jQuery on method with click to add an event listener to an element
$("h1").on("click", function() {
$("h1").css("color","green");  
});
// Using jQuery on method with keypress to add an event listener to an element
$("input").on("keypress", function() {
  console.log("Key is pressed");  
  });

// Using jQuery on method with mouseenter to add an event listener to multiple elements
$("button").on("mouseenter", function() {
  $(this).css("font-weight","bold");  
  });
$("button").on("mouseleave", function() {
  $(this).css("font-weight","normal");  
  });



}, 500);
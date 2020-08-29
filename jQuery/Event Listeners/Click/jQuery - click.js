window.setTimeout(function() {
alert("Hello");

// Using jQuery to add and event listeners to an element
$("h1").click(function() {
  alert("h1 clicked");  
});

// Using jQuery to add and event listeners to a collection of elements
$("button").click(function() {
    alert("button clicked");  
});

// Using jQuery to add and event listeners to a collection of elements and using "this"
$("button").click(function() {
    $(this).css("background","pink");
    varDisplayText =  $(this).text();
    console.log("You Clicked " + varDisplayText);
});

}, 500);
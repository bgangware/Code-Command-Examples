window.setTimeout(function() {
alert("Hello");

// This shows examples for the following methods
/*      text()
        html()
        val()
        attr()
        addclass()
        removeclass()
        toggleclass() */

// This demonstrates how to change the text of an element (h1)
$("h1").text("Updated Header 1"); 

// This demonstrates how to change the text of multiple elements of the same type (li)
$("li").text("Candies are updated"); 

// This demonstrates how to change the html using the html method (li)
$("ul").html("<li>twix is back</li><li>Carmel Nips are back</li>"); 

// This demonstrates how to change the html using the attr method (img)  We are changing the source (scr) for the image
$("img").css("width","200px");
$("img").attr("src","lana.jpg");



}, 500);
window.setTimeout(function() {
alert("Begin");

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

// This demonstrates how to change the html using the html method (h3)
$("h3").html("<h3>Kiaden and Kylie</h3>"); 

// This demonstrates how to change the html using the attr method (img)  We are changing the source (scr) for the image
$("img").css("width","200px");
$("img").attr("src","lana.jpg");



}, 500);
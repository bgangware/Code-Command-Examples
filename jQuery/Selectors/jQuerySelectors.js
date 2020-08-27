window.setTimeout(function() {
alert("Hello");

// Example of selector selecting a element (h1)
$("h1").css("color","purple");

// Example of selector selecting a Class (brandsPets)
$(".brandsPets").css("color","green");

// Example of selector selecting an ID (adorable)
$("#adorable").css("fontWeight","bold");

// Example of selector selecting a nested element (ul li)
$("ul li").css("color","orange");

// Example of selector selecting a single element (a) occuring multiple times with multiple properties
$("a").css({"font-size": "40px",
            "border": "3px dashed lime",
            "background": "lime"
});


// Example of selector selecting an element (h3) and loading the properties using an object
var selstyles = {
    color: "blue",
    backgroundColor: "yellow",
    fontWeight: "bold"
}
$("h3").css(selstyles);



}, 500);
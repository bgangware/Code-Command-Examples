window.setTimeout(function() {
alert("Hello");

// This shows examples for the following methods
//      val()
//      addclass()
//      removeclass()
//      toggleclass()
    
// This uses the method val to change the value of an input (to Lana Gangware)
$("input").val("Lana Gangware")

// This uses the method val to display the value of a selected drop down
alert($("select").val());

// This adds a class to al li's
$("li").addClass("correct");

//This adds a class to the first li
$("li:first").addClass("wrong");

//This adds a class to the last li
$("li:last").addClass("done");

//This removes a class from all H3's
$("h3").removeClass("correct");

//This toggles a class to all H4's
$("h4").toggleClass("correct");


}, 500);
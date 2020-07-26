window.setTimeout(function() {
//alert("Hello");

var h3Var = document.querySelectorAll(".test");
var pAllVar = document.querySelectorAll(".allLines");
var pOddVar = document.querySelectorAll(".oddLines");
var pEvenVar = document.querySelectorAll(".evenLines");

console.log(h3Var);

h3Var[0].style.color = "green";
h3Var[1].style.color = "orange";

pAllVar[0].style.background = "yellow";
pAllVar[1].style.background = "yellow";
pAllVar[2].style.background = "yellow";
pAllVar[3].style.background = "yellow";
pAllVar[4].style.background = "yellow";

pOddVar[0].style.color = "red";
pOddVar[1].style.color = "red";
pOddVar[2].style.color = "red";

pEvenVar[0].style.color = "blue";
pEvenVar[1].style.color = "purple";

}, 500);
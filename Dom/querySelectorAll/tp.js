window.setTimeout(function() {
alert("Hello");

var colorGuessVar = document.querySelectorAll(".colorGuessAll");
colorGuessVar[1].style.background = "red";
console.log(colorGuessVar);

var test1 = document.querySelector("#colorGuess1");
console.log(test1);


}, 500);
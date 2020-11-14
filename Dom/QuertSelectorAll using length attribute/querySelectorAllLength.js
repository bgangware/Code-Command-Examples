window.setTimeout(function() {
alert("Hello");


var pAllVar = document.querySelectorAll(".allLines");

var i;
for (i = 0; i < pAllVar.length; i++) {
    pAllVar[i].style.backgroundColor = "pink";
}


var i;
for (i = 0; i < pAllVar.length; i++) {
    var i2 = i+2;
    if (i2%2 == 0) { 
    console.log(i, i2);
    pAllVar[i].style.color = "blue";
    }
}

}, 500);
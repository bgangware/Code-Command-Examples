window.setTimeout(function() {
alert("Hello");

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);

var th3 = document.createElement("h3");
th3.innerHTML = "this is a h3";
document.body.appendChild(th3);

var tinput = document.createElement("input");
tinput.innerHTML = "this is a input";
document.body.appendChild(tinput);

}, 500);
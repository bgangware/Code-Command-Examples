window.setTimeout(function() {
alert("Hello");

// Using jQuery to add and keypress event listeners to an element
$("input").keypress(function() {
  alert("you pressed a key");  
});

// Using jQuery to add and keypress event listeners to an element.  Testing for an indivual key character keyed in.  In this case enter.
$("input").keypress(function(testevent) {
  debugger
  if (testevent.which === 13) {
  alert("you pressed  the enter key")
  }
  ;  
});



}, 500);
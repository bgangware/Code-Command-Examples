window.setTimeout(function() {

// Example of fadeOut method
$("#button1").on("click", function(){
    $("div").fadeOut(3000);
    });

// Example of fadeIn method
$("#button2").on("click", function(){
    $("div").fadeIn(3000);
    });

// Example of fadeToggle method
$("#button3").on("click", function(){
    $("div").fadeToggle(3000);
    });

// Example of sildeDown method
$("#button4").on("click", function(){
    $("div").slideDown(3000);
    console.log("button 4 is clicked");
    });

// Example of SlideUp method
$("#button5").on("click", function(){
    $("div").slideUp(3000);
    });

// Example of slideToggle method
$("#button6").on("click", function(){
    $("div").slideToggle(3000);
    });
    
}, 500);
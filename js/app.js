$("#red").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#red").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#red").removeClass("pressed");
    }, 250);
});

$("#green").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#green").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#green").removeClass("pressed");
    }, 250);
});

$("#blue").click(function (e) { 
    e.preventDefault();
    
     // Add "pressed" class when button is pressed
   $("#blue").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#blue").removeClass("pressed");
    }, 250);
});

$("#yellow").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#yellow").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#yellow").removeClass("pressed");
    }, 250);
});
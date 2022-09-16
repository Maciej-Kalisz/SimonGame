jq.$("#red").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#red").addClass("pressed");

    // Remove "pressed" class after 0.5s (500 milliseconds)
    setTimeout(function () {
        $("#red").removeClass("pressed");
    }, 500);
});

jq.$("#green").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#green").addClass("pressed");

    // Remove "pressed" class after 0.5s (500 milliseconds)
    setTimeout(function () {
        $("#green").removeClass("pressed");
    })
});

jq.$("#blue").click(function (e) { 
    e.preventDefault();
    
     // Add "pressed" class when button is pressed
   $("#blue").addClass("pressed");

    // Remove "pressed" class after 0.5s (500 milliseconds)
    setTimeout(function () {
        $("#blue").removeClass("pressed");
    })
});

jq.$("#yellow").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#yellow").addClass("pressed");

    // Remove "pressed" class after 0.5s (500 milliseconds)
    setTimeout(function () {
        $("#yellow").removeClass("pressed");
    })
});
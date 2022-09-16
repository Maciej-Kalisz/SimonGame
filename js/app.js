// Whether the game is in progress
var gameInProgress = false;

// Array of all player guesses
var guessArr = [];

// Array of all correct colours
var correctArr = [];

// Level that the player is on
var level = 1;

// Set level and heading to new level
function setLevel(newLevel) { level = newLevel; $("#level-title").text("Level " + level.toString()); }

// Red: 0
// Green: 1
// Blue: 2
// Yellow: 3

// Reset everything when game starts
function startGame() {
    gameInProgress = true;
    setLevel(1);
    guessArr = [];
    correctArr = [];
}

// Listening for keypress to start game
$("html").keypress(function (e) { 
    // TODO: 
    // - Empty array

    if (!gameInProgress) { 
        // Starting game, resetting values
        startGame(); 
    }
});

// Button click event functions
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

while (gameInProgress) {
    
}
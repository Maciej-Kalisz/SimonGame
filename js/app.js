// Whether the game is in progress
var gameInProgress = false;

// Whether the game is over
var gameOver = false;

// Array of all player guesses
var guessArr = [];

// Array of all correct colours
var correctArr = [];

// Level that the player is on
var level = 1;

// Next colour
var nextCol;

// Position in the guessArr (how many buttons player has chosen)
var guessNum = 0;

// Set level and heading to new level
function setLevel(newLevel) { level = newLevel; $("#level-title").text("Level " + newLevel.toString()); }

// Reset everything when game starts
function startGame() {
    gameInProgress = true;
    setLevel(1);
    guessArr = [];
    correctArr = [];
    guessNum = 0;
    genNext();
}

// Generate next colour and add to array
function genNext() {
    // Red: 0
    // Green: 1
    // Blue: 2
    // Yellow: 3

    // Assign colour to each value
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            nextCol = "red";
            correctArr.push(nextCol);
            break;
        case 1:
            nextCol = "green";
            correctArr.push(nextCol);
            break;
        case 2:
            nextCol = "blue";
            correctArr.push(nextCol);
            break;
        case 3:
            nextCol = "yellow";
            correctArr.push(nextCol);
    }

    console.log("#" + nextCol);
    $("#" + nextCol).addClass("nextColour");
    
    setTimeout(function () {
        $("#" + nextCol).removeClass("nextColour");
    }, 450);
}

// Listening for keypress to start game
$("html").keypress(function (e) { 
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

    // Adds guess to guess array
    guessArr.push("red");
    guessNum += 1;

    // DEBUG
    console.log(guessArr[guessNum-1]);
    console.log(correctArr[guessNum-1])

    // Checks for if guess matches the correct answer in the correct answers array
    if (guessArr[guessNum-1] == correctArr[guessNum-1]) {
        // Check to see if player has guessed all correctly by comparing final choice in each array
        if (guessArr[correctArr.length -1] == correctArr[correctArr.length -1]) {
            setTimeout(setLevel(level + 1), 650);
            guessArr = [];
            guessNum = 0;

            // Generate next after 1.5s
            setTimeout(genNext, 400);
        }
    } else {
        gameInProgress = false;
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 400);
    }
});

$("#green").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#green").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#green").removeClass("pressed");
    }, 250);

    // Adds guess to guess array
    guessArr.push("green");
    guessNum += 1;

    // DEBUG
    console.log(guessArr[guessNum-1]);
    console.log(correctArr[guessNum-1])

    // Checks for if guess matches the correct answer in the correct answers array
    if (guessArr[guessNum-1] == correctArr[guessNum-1]) {
        // Check to see if player has guessed all correctly by comparing final choice in each array
        if (guessArr[correctArr.length -1] == correctArr[correctArr.length -1]) {
            setTimeout(setLevel(level + 1), 650);
            guessArr = [];
            guessNum = 0;

            // Generate next after 1.5s
            setTimeout(genNext, 400);
        }
    } else {
        gameInProgress = false;
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 400);
    }
});

$("#blue").click(function (e) { 
    e.preventDefault();
    
     // Add "pressed" class when button is pressed
   $("#blue").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#blue").removeClass("pressed");
    }, 250);

    // Adds guess to guess array
    guessArr.push("blue");
    guessNum += 1;

    // DEBUG
    console.log(guessArr[guessNum-1]);
    console.log(correctArr[guessNum-1])

    // Checks for if guess matches the correct answer in the correct answers array
    if (guessArr[guessNum-1] == correctArr[guessNum-1]) {
        // Check to see if player has guessed all correctly by comparing final choice in each array
        if (guessArr[correctArr.length -1] == correctArr[correctArr.length -1]) {
            setTimeout(setLevel(level + 1), 650);
            guessArr = [];
            guessNum = 0;

            // Generate next after 1.5s
            setTimeout(genNext, 400);
        }
    } else {
        gameInProgress = false;
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 400);
    }
});

$("#yellow").click(function (e) { 
    e.preventDefault();
    
    // Add "pressed" class when button is pressed
    $("#yellow").addClass("pressed");

    // Remove "pressed" class after 0.25s (250 milliseconds)
    setTimeout(function () {
        $("#yellow").removeClass("pressed");
    }, 250);

    // Adds guess to guess array
    guessArr.push("yellow");
    guessNum += 1;

    // DEBUG
    console.log(guessArr[guessNum-1]);
    console.log(correctArr[guessNum-1])

    // Checks for if guess matches the correct answer in the correct answers array
    if (guessArr[guessNum-1] == correctArr[guessNum-1]) {
        // Check to see if player has guessed all correctly by comparing final choice in each array
        if (guessArr[correctArr.length -1] == correctArr[correctArr.length -1]) {
            setTimeout(setLevel(level + 1), 650);
            guessArr = [];
            guessNum = 0;

            // Generate next after 1.5s
            setTimeout(genNext, 400);
        }
    } else {
        gameInProgress = false;
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 400);
    }
});

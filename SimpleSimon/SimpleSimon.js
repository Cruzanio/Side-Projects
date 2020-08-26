'use strict';

var squares = ['red', 'green', 'blue', 'yellow']
var simonsArray = []
var playersArray = []
var stageCounter = 0
var stage = 0


//Figure out a way to start the game

var startGame = document.getElementById('start-btn').addEventListener('click', randomColor)


//Simon chooses a random color and stores it in simonsArray followed by the display of his choice
function randomColor() {
    var randomColor = squares[Math.floor(Math.random()*squares.length)];
    simonsArray.push(randomColor);
    console.log(simonsArray)
    // showPattern(simonsArray[simonsArray.length-1]);
    // nextStage()
    // playersArray=[];
}



//This will display the pattern of Simon's choices
function showPattern() {
    switch (element) {
        case 0:
            $("#green").addClass("disappear");
            setTimeout(function(){
                $("#green").removeClass("disappear");
            },250)
        case 1:

        case 2:

        case 3:

    }
}


//Turns the players choice into a number and pushes it to playersArray
function colorToNumber() {
    var playerClick = (this).attr("id");
        switch(playerClick) {
            case "red":
                playersArray.push(0);
                showPattern(0);
                break;
            case "green":
                playersArray.push(1);
                showPattern(1);
                break;
            case "blue":
                playersArray.push(2);
                showPattern(2);
                break;
            case "yellow":
                playersArray.push(3);
                showPattern(3);
                break;
        } compareSequence()
}


//need to compare playersArray and simonsArray to determine outcome
function compareSequence() {
}


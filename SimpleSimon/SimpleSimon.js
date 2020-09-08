'use strict';

var squares = ['red', 'green', 'blue', 'yellow']
var simonsArray = []
var playersArray = []
var stageCounter = 0
var stage = 0

//Starts the Game

window.onload = function () {
    document.getElementById('start-btn').addEventListener('click', randomColor)
}

//Simon chooses a random color and stores it in simonsArray followed by the display of his choice
function randomColor() {
    var randomColor = squares[Math.floor(Math.random() * squares.length)];
    simonsArray.push(randomColor);
    console.log(simonsArray)
    showPattern(simonsArray)
    nextStage()
    playersArray = [];
}

var intervalID = 0;

function showPattern() {
    for (var i = 0; i <= simonsArray.length-1; i++ ) {
        var buttonToFade = document.getElementById(simonsArray[i])
        console.log(buttonToFade)
        setTimeout(flashOn, 2000 * i, buttonToFade)
    }
}

function flashOn(buttonToFade) {
    buttonToFade.style.opacity = 1
    setTimeout(flashOff, 1000, buttonToFade)
}
function flashOff(buttonToFade) {
    buttonToFade.style.opacity = .3
}

function buttonFlasher() {
        setInterval(flashOn, 1000, buttonToFade)
}

//Turns the players choice into a number and pushes it to playersArray
    $(this).click(function colorToNumber() {
        var playerClick = $(this).attr("id");
        switch (playerClick) {
            case "red":
                playersArray.push("red");
                break;
            case "green":
                playersArray.push("green");
                break;
            case "blue":
                playersArray.push("blue");
                break;
            case "yellow":
                playersArray.push("yellow");
                break;
        }
        console.log(playersArray)
        // compareSequence()
    })

//need to compare playersArray and simonsArray to determine outcome
function compareSequence() {
}

function nextStage() {
        stageCounter++;
        var counterDisplay = document.getElementById('stage-counter')
        counterDisplay.innerHTML = 'Stage: ' + stageCounter
};


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
    // showPattern(simonsArray[simonsArray.length - 1])
    nextStage()
    playersArray = [];
}

var intervalID = 0;

function showPattern() {
    for (var i = 0; i <= simonsArray.length-1; i++ ) {
        var buttonToFade = document.getElementById(simonsArray[i])
        console.log(buttonToFade)
        flashOn(buttonToFade)

        setTimeout(flashOff, 1000, buttonToFade)
    }
}

// function showPattern(element) {
//     simonsArray.forEach(function (element, i) {
//         var buttonToFade = document.getElementById(element)
//         flashOn(element)
//         setTimeout(flashOff, 1000, element)
//     })
// }

function flashOn(buttonToFade) {
    console.log(buttonToFade)
    buttonToFade.style.opacity = 1
}
function flashOff(buttonToFade) {
    console.log(buttonToFade)
    buttonToFade.style.opacity = .3
    clearInterval(intervalID);
}

function buttonFlasher() {
        setInterval(flashOn, 1000)
}

//Turns the players choice into a number and pushes it to playersArray
    function colorToNumber() {
        var playerClick = (this).attr("id");
        switch (playerClick) {
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
        }
        compareSequence()
    }

//need to compare playersArray and simonsArray to determine outcome
function compareSequence() {
}

function nextStage() {
        stageCounter++;
        var counterDisplay = document.getElementById('stage-counter')
        counterDisplay.innerHTML = 'Stage: ' + stageCounter
};


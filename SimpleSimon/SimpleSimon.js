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
    showPattern(simonsArray[simonsArray.length - 1])
    nextStage()
    playersArray = [];
}


//This will display the pattern of Simon's choices


//idea is to access the opacity value of the passed in "element"
var opacity = .3
var intervalID = 0;

// function show(element) {
//     var buttonToFade = document.getElementById(element);
//     console.log(buttonToFade)
//     opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));
//     if (opacity < 1) {
//         opacity = opacity + 0.1;
//         buttonToFade.style.opacity = opacity;
//     } else {
//         clearInterval(intervalID);
//     }
// }

//This will display the pattern of Simon's choices
// function showPattern(element) {
//     switch (element) {
//         case 'red':
//             var red = document.getElementById(element)
//             red.style['background-color'] = "#00F"
//             break;
//         case 'green':
//             var green = document.getElementById(element)
//             green.style['background-color'] = "#FF0"
//             break;
//         case 'blue':
//             var blue = document.getElementById(element)
//             blue.style['background-color'] = "#F00"
//             break;
//         case 'yellow':
//             var yellow = document.getElementById(element)
//             yellow.style['background-color'] = "#0F0"
//             break;
//     }
// }


// function showPattern(element) {
//     simonsArray.forEach(function (element, i) {
//         var buttonToFade = document.getElementById(element)
//         if (buttonToFade.style.opacity < 1) {
//             opacity += 1
//             buttonToFade.style.opacity = opacity
//         } else {
//             opacity = .3
//             buttonToFade.style.opacity = opacity
//         }
//     })
// }

function showPattern(element) {
    simonsArray.forEach(function (element, i) {
        flashOn(element)
    })
}



function flashOn(element) {
    var buttonToFade = document.getElementById(element)
    if (buttonToFade.style.opacity < 1) {
        opacity += 1
        buttonToFade.style.opacity = opacity
    } else if (buttonToFade.style.opacity = 1) {
        opacity = .3
        buttonToFade.style.opacity = opacity
        clearInterval(intervalID);
    }
}
// else if (opacity) {
//     opacity = .3
//     buttonToFade.style.opacity = opacity
// }

// function showPattern(element) {
//     var buttonToFade = document.getElementById(element);
//     console.log(buttonToFade)
//     console.log(opacity)
//     buttonFlasher()
//     buttonToFade.style.opacity = opacity;
//     console.log(buttonToFade.style.opacity);
// }

// function flashOn() {
//     if (opacity < 1) {
//         opacity += .1;
//         console.log(opacity)
//     } else {
//         clearInterval(intervalID);
//     }
// }

    function flashOff() {
    var buttonToFade = document.getElementById(element)
    if (buttonToFade.style.opacity = 1) {
            opacity = .3
            buttonToFade.style.opacity = opacity
            clearInterval(intervalID);
        }
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


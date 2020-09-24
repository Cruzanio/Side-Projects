'use strict';
(function ($) {
    $(document).ready(function () {

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
            playSound()
            var randomColor = squares[Math.floor(Math.random() * squares.length)];
            simonsArray.push(randomColor);
            showPattern(simonsArray)
            $('#pressStart').hide()
            $('#start-btn').hide()
            nextStage()
            playersArray = [];
        }

//Displays the passed Array
        function showPattern() {
            for (var i = 0; i <= simonsArray.length - 1; i++) {
                var buttonToFade = document.getElementById(simonsArray[i])
                setTimeout(flashOn, 750 * i, buttonToFade)
            }
        }

        function flashOn(buttonToFade) {
            buttonToFade.style.opacity = 1
            setTimeout(flashOff, 250, buttonToFade)
        }

        function flashOff(buttonToFade) {
            buttonToFade.style.opacity = .5
        }

//Turns the players choice into a number and pushes it to playersArray
        $(document).ready(function () {
            $('.colorButton').click(function () {
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
                setTimeout(compareSequence, 500)
            })
        })

//need to compare playersArray and simonsArray to determine outcome
        function compareSequence() {
            if (playersArray.length === simonsArray.length) {
                if (JSON.stringify(playersArray) === JSON.stringify(simonsArray)) {
                    randomColor()
                } else {
                    if (confirm('Game Over. Would you like to try again?')) {
                        simonsArray = []
                        playersArray = []
                        stageCounter = 0
                        randomColor()
                    } else {
                        close()
                    }
                }
            } else if (playersArray.length > simonsArray.length) {
                if (confirm('Game Over. Would you like to try again?')) {
                    simonsArray = []
                    playersArray = []
                    stageCounter = 0
                    randomColor()
                } else {
                    close()
                }
            }
        }

        function playSound() {
            var sound = document.getElementById("player");
            sound.play();
        }

        playSound()


        function nextStage() {
            stageCounter++;
            var counterDisplay = document.getElementById('stage-counter')
            counterDisplay.innerHTML = 'Stage: ' + stageCounter
        };

        const ripple = el => {
            let d = el.dataset.ripple.split('-'),
                s = 'rgba(3,149,229,0.4)',
                e = 'rgba(3,149,229,1)';
            d[2] = Number(d[2]) + 4;
            el.dataset.ripple = d.join('-');
            el.style.background = `radial-gradient(circle at ${d[0]}px ${d[1]}px, ${s} 0%, ${s} ${d[2]}%, ${e} ${d[2] + 0.1}%)`;

            window.requestAnimationFrame(() => {
                if (el.dataset.ripple && d[2] < 100) ripple(el)
            });
        };

        const start = ev => {
            ev.target.dataset.ripple = `${ev.offsetX}-${ev.offsetY}-0`
            ripple(ev.target);
        };

        const stop = ev => {
            let el = document.querySelector('[data-ripple]');
            delete el.dataset.ripple;
            el.style.background = 'none';
        };

// Events
        document.querySelectorAll('.highlight').forEach( el => el.addEventListener( 'mousedown', start ));
        document.addEventListener( 'mouseup', stop );
    })

})(jQuery);


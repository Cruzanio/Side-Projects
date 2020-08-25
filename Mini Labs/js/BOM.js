"use strict";

var count = 0;
var max = 5;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);


// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     window.location = 'http://www.google.com'
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring



"use strict";

function giveMeFive(obj){
    var five=[];
    for (var key in obj) {
        if (key.length===5 ) {
            five.push(key);
        }
        if (obj[key].length===5) {
            five.push(obj[key]);
        }
    }
    console.log(five);
}

giveMeFive({Our:"earth",is:"a",beautiful:"world"})
giveMeFive({Ihave:"enough", money:"to",buy:"a",sports:"car"})
giveMeFive({Apear:"is", sweeter: 'than', green:"apple"})


"use strict";


//Adds figures to bag as long as bag is not full
function grabDoll(actionFigures){
    var bag=[];
    for (var i = 0; i <= actionFigures.length-1; i++)
        if ((actionFigures[i] === 'Superman' || actionFigures[i] === 'Batman') && bag.length < 3) {
            bag.push(actionFigures[i])
        } else if (bag.length >= 3) {
            break;
        } else {
            continue;
        }
    console.log(bag) ;
}

grabDoll(["Superman","Superman","Hulk"]);
grabDoll(["Hulk","Spiderman","Hulk","Batman"]);
grabDoll(["Hulk","Spiderman","Spiderman","Hulk","Hulk"]);
grabDoll(["Spiderman","Superman","Spiderman","Hulk","Batman","Batman"]);
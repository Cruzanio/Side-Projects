"use strict";

function getLength() {
    var arr = [1, 2 ,3]
    arr.push(4)
    console.log(arr)
    console.log(arr.length)
    arr.pop(4);
    console.log(arr)
}
getLength()
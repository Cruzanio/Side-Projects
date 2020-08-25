"use strict"

function helloWorld() {
    var helloWorldPrint = 'Hello World'
    console.log(helloWorldPrint)
}
helloWorld()

//Basic Math in Functions
function equal1() {
    var v1 = 50
    var v2 = 100
    var localTotal = v1 + v2
    console.log(localTotal)
}
equal1()

function equal2() {
    var v1 = 49
    var v2 = 84
    var localTotal = v1 - v2
    console.log(localTotal)
}
equal2()

function equal3() {
    var v1 = 7
    var v2 = 3
    var localTotal = v1 * v2
    console.log(localTotal)
}
equal3()

function equal4() {
    var v1 = 40
    var v2 = 80
    var localTotal = v1 / v2
    console.log(localTotal)
}
equal4()

function equal5() {
    var v1 = 35
    var v2 = 19
    var localTotal = v1 % v2
    console.log(localTotal)
}
equal5()


//Concatenation
function conCat() {
    var l1 = 'H'
    var l2 = 'e'
    var l3 = 'l'
    var l4 = 'l'
    var l5 = 'o'
    var l6 = " World"
    var fCat = l1 + l2 + l3 + l4 + l5 + l6
    console.log(fCat)
}
conCat()


//Array Manipulation
function getLength() {
    var arr = [1, 2 ,3]
    arr.push(4)
    console.log(arr)
    console.log(arr.length)
    arr.pop(4);
    console.log(arr)
}
getLength()


//Object Creation
var person = {
    firstName: "Cruzanio",
    lastName: "Villarreal",
    age: 23,
    eyeColor: "Brown",
    sayHi: function () {
        alert("Hello!")
    }
};

person.sayHi()


//Booleans in Functions
function TrueOrFalse(val) {
    if (val === true) {
        console.log("That value is true")
    } else {
        console.log("That value is false")
    }
}
TrueOrFalse()

function saleHotdogs(n){
    if (n < 5) {
        var price = 100 * n
        return price
    } else if (n >= 5 && n < 10) {
        price = 95 * n
        return price
    } else {
        price = 90 * n
        return price
    }
}
console.log(saleHotdogs(100))


function howManydays(month){
    var days;
    switch (month){
        case 2:
            days = 28;
            break;
        case 4:
            days = 30;
            break;
        case 6:
            days = 30;
            break;
        case 9:
            days = 30;
            break;
        case 11:
            days = 30;
            break;
        default:
            days = 31
    } return days;
}
console.log(howManydays(4))
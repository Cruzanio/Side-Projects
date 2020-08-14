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
    eyeColor: "Brown"
};


//Booleans in Functions
var val1 = 10 < 0
function TrueOrFalse(val) {
    if (val === true) {
        console.log("That value is true")
    } else {
        console.log("That value is false")
    }
}
TrueOrFalse(val1)


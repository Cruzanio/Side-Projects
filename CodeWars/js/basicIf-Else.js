"use strict";

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
"use strict";

//callback
function sumado(num1, num2, sumaF, sumaFX2) {
    let suma = num1 + num2;

    sumaF(suma);
    sumaFX2(suma);
}

sumado(
    3,
    4,
    function (parametre) {
        console.log(parametre);
    },
    function (input) {
        console.log(input * 2);
    }
);

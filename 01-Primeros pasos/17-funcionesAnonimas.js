"use strict";

//callback
function sumado(num1, num2, sumaF, sumaFX2) {
    let suma = num1 + num2;

    sumaF(suma);
    sumaFX2(suma);
}

//Uso de funcion anonima
/* sumado(
    3,
    4,
    function (parametre) {
        console.log(parametre);
    },
    function (input) {
        console.log(input * 2);
    }
); */

//uso de funciones flecha
sumado(
    3,
    5,
    (numeroA) => console.log(numeroA),
    (numeroB) => console.log(numeroB + 2)
);

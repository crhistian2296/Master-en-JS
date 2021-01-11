"use strict";

/** Indica si el numero introducido es par o impar */
let num = parseInt(prompt("Introduce un numero: "));
let parImpar = "";

while (isNaN(num)) {
    num = parseInt(prompt("Introduce un numero: "));
}

if (num % 2 == 0) {
    parImpar = "par";
} else if (num % 2 != 0) {
    parImpar = "impar";
}

document.write(`<h3>El numero ${num} es un numero ${parImpar}</h3>`);

"use strict";

/** Muestra todos los numeros divisores de un numero introducido por el usuario en un prompt */
let num = parseInt(
    prompt("Introduzca su numero para mostrar todos sus divisores: ")
);
let divisores = num;

document.write(`<h3>Los numeros divisores de ${num} son: </h3>`);

while (divisores > 0) {
    if (num % divisores == 0) {
        document.write(`${divisores},\t`);
    }
    divisores--;
}

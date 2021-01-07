"use strict";

/**Programa que recibe 2 numeoros y como respuesta dice cual es mayor, cual menor y si son iguales */
do {
    alert("Advertencia: Introduce solo numeros por favor.");

    let a = prompt("Introduce tu primer numero.");
    let b = prompt("Introduce tu segundo numero.");
} while (isNaN(a) || isNaN(b));

if (a < b) {
    alert(`${b} es el mayor y ${a} el menor.`);
} else if (b < a) {
    alert(`${a} es el mayor y ${b} el menor.`);
} else if (a == b) {
    alert(`${a} y ${b} son iguales.`);
}

"use strict";

/** Calculadora:
 * - Pide 2 numerons por pantalla
 * - Si metemos un numero mal nos lo vuelva a pedir
 * - Resultado en el cuerpo de la pagina, en una alerta en la consola.
 */
let num1 = parseInt(prompt("Introduce el primer numero para el calculo"));
let num2 = parseInt(prompt("Introduce el segundo numero para el calculo"));

//Input-data validation
while (isNaN(num1)) {
    num1 = parseInt(prompt("Introduce el primer numero para el calculo bien"));
}
while (isNaN(num2)) {
    num2 = parseInt(prompt("Introduce el segundo numero para el calculo bien"));
}

document.write(`<h3>Las 4 operaciones básicas de la calculadora son: </h3>`);

let arr = ["+", "-", "*", "/"];
let resultado = 0;

for (let op of arr) {
    if (op == "+") {
        resultado = num1 + num2;
    }
    if (op == "-") {
        resultado = num1 - num2;
    }
    if (op == "*") {
        resultado = num1 * num2;
    }
    if (op == "/") {
        resultado = num1 / num2;
    }

    alert(`${num1} ${op} ${num2} = ${resultado}`);
    console.log(`${num1} ${op} ${num2} = ${resultado}`);
    document.write(`${num1} ${op} ${num2} = ${resultado}</br>`);
}

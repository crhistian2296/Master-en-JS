"use strict";

/** Imprimir la tabla del numero introducido por el usuario */
let num = parseInt(prompt("Introduzca un numero para visualizar su tabla: "));

while (isNaN(num)) {
    num = parseInt(prompt("Introduzca un numero para visualizar su tabla: "));
}

document.write(`<h2>Tabla del ${num}</h2>`);

let resultado = 0;

for (let i = 1; i <= 10; i++) {
    resultado = num * i;
    document.write(`${num} X ${i} = ${resultado} </br>`);
}

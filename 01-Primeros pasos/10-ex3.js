"use strict";

/**Hacer un programa que devuelva todos los numeros perteneciente al intervalo abierto entre los dos numeros dados por el usuario */
let inicio = parseInt(prompt("Introduzca el numero inicial: "));
let fin = parseInt(prompt("Introduzca el numero final: "));
let serie = "";

document.write(`<h3>Numeros desde ${inicio} y ${fin}:</h3>`);

for (let i = 0; i < fin - 1; i++) {
    document.write(`${inicio + i}\t`);
    debugger;
}

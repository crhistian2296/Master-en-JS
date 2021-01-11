"use strict";

/**Hacer un programa que devuelva todos los numeros perteneciente al intervalo abierto entre los dos numeros dados por el usuario */
let inicio = parseInt(prompt("Introduzca el numero inicial: "));
let fin = parseInt(prompt("Introduzca el numero final: "));

document.write(`<h3>Numeros desde ${inicio} y ${fin}:</h3>`);

for (let i = inicio; i <= fin; i++) {
    document.write(`${i}\t`);
}

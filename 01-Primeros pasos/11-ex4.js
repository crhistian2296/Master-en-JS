"use strict";

/**Mostrar todos los numeros impares que hay entre los 2 introducidos por l usuario */

let inicio = parseInt(prompt("Introduzca el numero inicial: "));
let fin = parseInt(prompt("Introduzca el numero final: "));

document.write(`<h3>Numeros impares entre ${inicio} y ${fin}:</h3>`);

if (inicio % 2 == 0) {
    inicio++;
    for (let i = inicio; i <= fin; i += 2) {
        document.write(`${i}\t`);
    }
} else if (inicio % 2 != 0) {
    for (let i = inicio; i <= fin; i += 2) {
        document.write(`${i}\t`);
    }
}

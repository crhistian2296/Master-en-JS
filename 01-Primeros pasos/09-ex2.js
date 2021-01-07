"use strict";

/**Utilizando un bucle, mostrar la media y la suma de los numeros introducidos hasta meter un numero negativo, despues mostrar el resultado. */
let sum = 0,
    average = 0;

let counter = 0;
let num = 0;

alert(
    "Advertencia: se sumaran todos los numeros introducidos, si introduce uno negativo se acaba la suma sin sumar ese ultimo."
);

//Bucle que recibe los numeros con cada iteracion
while (num >= 0) {
    num = parseInt(prompt("Introduce un numero: "));

    //Comprobacion de numero
    if (isNaN(num)) {
        alert(
            "Introduce solo numeros por favor. Recarga la pagina para intentar de nuevo."
        );
        continue;
    }

    //Si se introduce el numero negativo se acaba l ejecucion
    if (num < 0) {
        break;
    }

    counter += 1;
    sum += num;
    average = sum / counter;
}

alert(`La suma total es: ${sum}`);
alert(`El promedio total es: ${average}`);

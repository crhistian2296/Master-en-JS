'use strict'

let edad = 25;

console.log(`Tu edad es ${edad} años`);

mayorEdad(edad);

function mayorEdad(edad) {
    if (edad > 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}
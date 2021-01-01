'use strict'

//SWITCH
let edad = 30
let imprime = ""

switch (edad) {
    case 18:
        imprime = "Cumpliste 18"
        break;

    case 25:
        imprime += "ya eres mayoy de edad"
        break;

    case 30:
        imprime += "eres adulto hecho y derecho"
        break;

    case 50:
        imprime += "eres adulto incluso ya eres anciano"
        break;

    default:
        console.error("Algo terrible ha pasado");
}

console.log(imprime);
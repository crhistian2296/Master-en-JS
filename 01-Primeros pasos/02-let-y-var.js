'use strict'

//EXPERIMENTANDO CON LOS AMBIENTES  Y LET Y VAR

if (true) {
    if (true) {
        if (true) {
            var nombre = "Manolo";
        }
    }
}

console.log(nombre);
// var crea variables globales

var apellido = "Hernandez"

if (true) {
    let apellido = "Garcia";
    console.log(apellido);
}

console.log(apellido);
// let crea variables locales
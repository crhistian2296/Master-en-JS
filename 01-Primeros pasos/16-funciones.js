"use strict";

//Definicion de la funcion
function salude() {
    console.log("Hola soy una computadora desde el log");
    return "Hola caracola desde el return";
}

//Asignacion del conjunto de instrucciones a una constante (buena practica)
const saludo = salude();

console.log(saludo);
console.log("============================================================");

//Llamado de la funcion (imprime lo que se le indico pero no el return)
salude();

//Funcion con 2 parametros de entrada
// function calculadora(num1, num2) {
//     console.log("Suma: " + (num1 + num2));
//     console.log("Resta: " + (num1 - num2));
//     console.log("Suma: " + num1 * num2);
//     console.log("Suma: " + num1 / num2);
//     console.log("============================================================");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`***** Operando con ${i} *****`);
//     calculadora(i, 15);
// }
/*======================================================================= */

//funciones para imprimir
function logPrint(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicación: " + num1 * num2);
    console.log("División: " + num1 / num2);
    console.log("============================================================");
}

function documentPrint(num1, num2) {
    document.write("Suma: " + (num1 + num2) + "</br>");
    document.write("Resta: " + (num1 - num2) + "</br>");
    document.write("Multiplicación: " + num1 * num2 + "</br>");
    document.write("División: " + num1 / num2 + "</br>");
    document.write(
        "============================================================</br>"
    );
}

//Parametro opcional, ya lleva un valor por defecto pero es modificable
function caculadoraGraficadora(num1, num2, show = false) {
    if (show == false) {
        //funcion1 complementaria para imprimir
        logPrint(num1, num2);
    } else {
        //funcion1 complementaria para imprimir
        documentPrint(num1, num2);
    }
}
//Imprime solo los logs
caculadoraGraficadora(2, 6);

//Imprime en la pagina web
caculadoraGraficadora(2, 6, true);

/*======================================================================= */

//Parametro REST
function frutero(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    let i = 3;
    for (const fruta of restoFrutas) {
        console.log(`Fruta ${i}: ${fruta}`);
        i++;
    }
}

// frutero(
//     "platano",
//     "karkuma",
//     "piña",
//     "guanabana",
//     "naranja",
//     "pomelo",
//     "fresa",
//     "melocotón"
// );

let carros = ["lamborghini", "audi", "mercedes", "jaguar"];

//Parametro SPREAD
frutero(
    "loco",
    ...carros,
    "platano",
    "karkuma",
    "piña",
    "guanabana",
    "naranja",
    "pomelo",
    "fresa",
    "melocotón"
);

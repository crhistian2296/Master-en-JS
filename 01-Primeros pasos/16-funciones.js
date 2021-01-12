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

//Parametro opcional, ya lleva un valor por defecto pero es modificable
function caculadoraGraficadora(num1, num2, show = false) {
    if (show == false) {
        console.log("Suma: " + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Multiplicación: " + num1 * num2);
        console.log("División: " + num1 / num2);
        console.log(
            "============================================================"
        );
    } else {
        document.write("Suma: " + (num1 + num2) + "</br>");
        document.write("Resta: " + (num1 - num2) + "</br>");
        document.write("Multiplicación: " + num1 * num2 + "</br>");
        document.write("División: " + num1 / num2 + "</br>");
        document.write(
            "============================================================"
        );
    }
}
//Imprime solo los logs
caculadoraGraficadora(2, 6);

//Imprime en la pagina web
caculadoraGraficadora(2, 6, true);

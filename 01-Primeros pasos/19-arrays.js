"use strict";

let nombres = ["alejo", "marcela", "carlos", "lucas", "angel", "alicia"];
console.log(nombres[1]);
console.log(nombres.length);

let elemento = parseInt(prompt("Que nombre deseas obtener (de 0 a 5)", 0));
if (elemento >= 0 && elemento <= nombres.length - 1) {
    console.log(`El nombre elegido es: ${nombres[elemento]}`);
} else {
    alert("Advertencia: tienes que introducir un numero de 0 a 5");
}

/* ================================================================ */

let lenguajes = [
    "javascript",
    "python",
    "C#",
    "java",
    "php",
    "haskel",
    "kotlin",
    "swift",
];

document.write("<h2>Lenguajes de programacion</h2>");
document.write("<ul>");

//FOR OF
/* for (const lenguaje of lenguajes) {
    document.write(`<li>${lenguaje}</li>`);
} */
//FOR EACH 1
//lenguajes.forEach((elemento) => document.write(`<li>${elemento}</li>`));

//FOR EACH 3
lenguajes.forEach((element, index, arr) => {
    document.write(`<li> El indice es: ${index}, ${element} </li>`);
    //el tercer parametro contiene el array de elementos como tal
    console.log(arr);
});

document.write("</ul>");

"use strict";

let nombres = ["alejo", "marcela", "carlos", "lucas", "angel", "alicia"];
console.log(nombres[1]);
console.log(nombres.length);

/* let elemento = parseInt(prompt("Que nombre deseas obtener (de 0 a 5)", 0));
if (elemento >= 0 && elemento <= nombres.length - 1) {
    console.log(`El nombre elegido es: ${nombres[elemento]}`);
} else {
    alert("Advertencia: tienes que introducir un numero de 0 a 5");
} */

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

/* ================================================================ */
//Arrays multidimensionales
let series = ["Lupin", "Mr robot", "Kumo desuga", "Shingeki no kyojin"];
let generos = ["Accion", "Comedia", "Suspense", "Gore"];

let arr2D = [series, generos];

console.log(arr2D[0][1]);
console.log(arr2D[1][3]);

series.push("Alice in borderland");
generos.push("Romance");

let elemento = "";
let elemento2 = "";

while (elemento != "end") {
    elemento = prompt("Que serie desea incluir?");
    //.pop([elemento...]) Aumenta el numero de elementos deseados desde el final
    series.push(elemento);
}
//.pop() Elimina el ultimo elemento de un array
series.pop();

while (elemento2 != "end") {
    elemento2 = prompt("Que genero desea incluir?");
    //.unshift([elemento...]) Aumenta el numero de elementos deseados desde el inicio
    generos.unshift(elemento2);
}
//.shift() Elimina el primer elemento de un array
generos.shift();

console.log(series);
console.log(generos);

let elemenToDelete = "";
elemenToDelete = prompt("Que genero desea eliminar?");

if (generos.includes(elemenToDelete)) {
    let indexToDelete = generos.indexOf(elemenToDelete);
    generos.splice(indexToDelete, 1);
} else {
    alert("Advertencia: Ese elemento no existe");
}

console.log("arr con elementos eliminados =>", generos);

let arrToText = series.join();
console.log("arr to text =>", arrToText);

/* ================================================================ */

//.sort() Ordena de forma alfabetica y/o numerica
let generosABC = generos.sort();
console.log("Generos ordenados =>", generosABC);

//.reverse() Invierte el orden de aparicion en un array
let generosCBA = generosABC.reverse();
console.log(generosCBA);

"use strict";

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array tanto en el cuerpo de la pagina como en consola
3. Ordenarlo y mostralo
4. Invertirlo y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario y su indice
(se valorara el uso de funciones)
*/
//FORMA 1
let arrElements = [];
let cifra = 0;
/*
let elementos = "";

for (let i = 0; i < 6; i++) {
    cifra = prompt(`Introduzca el la cifra #${i + 1}: `);
    elementos += cifra + " ";
}
arrElements = elementos.split(" ");
arrElements.pop();
console.log(arrElements);
document.write(arrElements);
 */

//FORMA 2
//Pedir y meter los 6 numeros en un arrat
for (let i = 0; i < 6; i++) {
    cifra = parseInt(prompt(`Introduzca el la cifra #${i + 1}: `));
    while (isNaN(cifra)) {
        cifra = parseInt(prompt("Advertencia: Introduce solo numeros"));
    }
    arrElements.push(cifra);
}

//Imprimir el array en consola
console.log(arrElements);

//Mostrar el array en el body de la pagina
document.write(`<h2>Contenido del array</h2>`);
document.write("<ul>");
arrElements.forEach((element, index) => {
    document.write(`<li>Cifra #${index + 1} => ${element}</li>`);
});
document.write("</ul>");

//Ordenado
let arrOrdenado = arrElements.sort((a, b) => a - b);
console.log("Ordenado:", arrOrdenado);

//Reverse
let arrReverse = arrOrdenado.reverse();
console.log("Inverso:", arrReverse);

//# de elementos
console.log("Longitud:", arrElements.length);

//Buscar un elemento y devovelr su indice
let numToSearch = parseInt(prompt("Busca un numero:"));
let isIn = arrReverse.includes(numToSearch);
if (isIn) {
    console.log("El numero buscado es:", numToSearch);
    console.log(
        "El indice de aparicion en reverse es:",
        arrReverse.indexOf(numToSearch)
    );
} else if (!isIn) {
    console.log("No existe dentro del array");
}

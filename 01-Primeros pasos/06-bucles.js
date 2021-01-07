'use strict'

//FOR
console.log("Conteo hasta 20 con FOR");
for (let numFor = 1; numFor < 21; numFor++) {
    console.log(`numeroFor: ${numFor}`);
}

console.log("");

/////////////////////////////////////////////////////////////

//WHILE
console.log("Conteo Nuketown");
let año = 2020;
while (año < 2025) {
    console.log(`Todo esta bien, aun queda para nuketown 2025 -> ${año}`);
    año++;
}

console.log("MIERDA!!! TIRAD DE CAJA YAAAA!!!");

/////////////////////////////////////////////////////////////

//DO-WHILE
let animales = ["gato", "vaca", "raton", "jirafa", "leopardo"];
let iterador = 0;
do {
    console.log(`Este no es -> ${animales[iterador]}`);
    iterador += 1;
    if (animales[iterador] == "jirafa") {
        console.log(`Este si es la ${animales[iterador]}`);
    }
} while (animales[iterador] != "jirafa");

/////////////////////////////////////////////////////////////

//FOR OF

//iterando un array
let numeros = ["uno", "dos", "tres", "cuatro", 5, 6, 7];

for (let element of numeros) {
    element += 1;
    console.log(element);
}
console.log("");


//iterando un Set
let iterable = new Set([1, 2, 3, 3, 2, 1]);

for (const value of iterable) {
    console.log(value);
}

console.log("");

/*  Queda demostrado que "for of" recorre elementos iterables como arrays strings y los definidos por el usuario. Es epecifico para colecciones y  no se debe usar en objetos a no ser que explicitamente el protocolo iterable. */

//FOR IN

const objectAlpha = {
    a: 1,
    b: 2,
    c: 3,
    d: "cuatro",
    e: "cinco"
};

for (const propertie in objectAlpha) {
    console.log(`${propertie}: ${objectAlpha[propertie]}`);
}

/** "for in" recorre las propiedades de un objeto */
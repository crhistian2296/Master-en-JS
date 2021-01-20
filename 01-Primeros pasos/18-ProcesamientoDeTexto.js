"use strict";

//Conversion de numeros a strings
let num = 1234;
let numStr = num.toString();
console.log(typeof numStr);

//Conversion a mayusculas, minusculas, y capitalize
let saludo = "Hola buenos dias";

let saludoMax = saludo.toUpperCase();
console.log("Texto uppercase:", saludoMax);

let saludoMin = saludo.toLowerCase();
console.log("Texto lowercase:", saludoMin);

function toCapitalize(text) {
    if (typeof text != "string") {
        console.error("it's not a string");
    } else if (typeof text === "string") {
        //Dividir strings =>
        //Dividir strings => .split([separador])
        let arrOfStrings = text.split(" ");

        let wordCapitalized = "";
        let textCapitalized = "";

        for (const word of arrOfStrings) {
            //Seleccionar 1 solo caracter => .charAt([posicion])
            //Recortar string => slice([posicion])
            wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

            textCapitalized += wordCapitalized + " ";
        }

        //Concatenar cadenas => .concat([string])
        return "Texto capitalize: ".concat(textCapitalized);
    }
}

let saludoCapitalize = toCapitalize(saludo);
console.log(saludoCapitalize);

//=====================================================================

let textSample =
    "Bienvenidos a la programacion en javascript, aqui aprenderemos la belleza de pensar como un computador con javascript";

//Encuentra el primer caracter de la primera ocurrencia
let buscarIndexInicio = textSample.indexOf("la");
console.log(buscarIndexInicio);

//Encuentra el primer caracter de la ultima ocurrencia
let buscarIndexUltimo = textSample.lastIndexOf("la");
console.log(buscarIndexUltimo);
//si las palabras no se encuentran en el texto arroja -1

//match([string]|[regExp]) Encuentra una o varias ocurrencias de una palabra y las guarda en un array
let buscarMatch = textSample.match("javascript");
let buscarMatchGlobal = textSample.match(/la/gi);

console.log(buscarMatch);
console.log(buscarMatchGlobal);

//substr([Inicio], [longitud]) Devuelve una cadena iniciando en un caracter especifico con la longitud especificada por el usuario
let subStringPiece = textSample.substr(17, 12);
console.log(subStringPiece);

//substring Devuelve el fragmento restante de una cadena a partir del indice especificado
let stringPiece = textSample.substring(17);
console.log(stringPiece);

//charAt() Devuelve el caracter en la posicion especificada
let especificChar = textSample.charAt(17);
console.log(especificChar);

//starWith([string]), endsWith([string]) Devuelven booleano afirmando o negando si empieza o acaba con ese fragmento de cadena

let startString = textSample.startsWith("Hola");
let endString = textSample.endsWith("computador");

console.log('Empieza con "Hola"? =>', startString);
console.log('Termina con "computador"? =>', endString);

//includes([string]) Arroja un booleano afirmando o negando la ocurrencia dentro del string objetivo de un substring especificado
let isInString = textSample.includes("belleza");
console.log('Esta "belleza" en el string? =>', isInString);

//replace([string], [string]) Reemplaza dentro de un string un substring por las ocurrencias del otro
//solo la primera ocurrencia
let textReplace = textSample.replace("javascript", "laravel");
console.log(textReplace);
//todas las ocurrencias
let textReplace2 = textSample.replace(/javascript/gi, "laravel");
console.log(textReplace2);

//slice([number]) Devuelve el string recortado enpezando por el caracter indicado
let textSlice = textSample.slice(24);
console.log(textSlice);

//split([character]) Devuelve un array con cadenas que anteriormente estaban separadas por un tipo de caracter
let textSplit = textSample.split(" ");
console.log(textSplit);

//trim() Recorta los espacios al inicio y al final de un string
let textSample2 = "   " + textSample + "   ";
console.log("Con espacios =>", textSample2);

let textTrim = textSample2.trim();
console.log("Sin espacios =>", textTrim);

//String templates
let nombre = "Crhistian Alexander";
let apellidos = "Garcia Urbano";
document.write(`
    <h4>Mi nombre es: ${nombre}</h4>
    <h4>Mis apellidos son: ${apellidos}<h4>
    <h6>Este es un h6 random para probar el string template<h6>`);

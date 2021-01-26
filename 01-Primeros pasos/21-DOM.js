"use strict";

//  DOM - Documnent Object Model

let caja = document.getElementById("boxSample");

caja.textContent = "Hola pendejos les cierro el chuzo y les modifico la caja";
caja.style.background = "darkgray";
caja.style.color = "brown";
caja.style.padding = "25px";
caja.className = "sorpresa";

let cajaSorpresa = document.querySelector(".sorpresa");
cajaSorpresa.style.margin = "15px";

//Selectores
let contenedor_1 = document.querySelector("#contenedor_1");
let contenedor_2 = document.querySelector("#contenedor_2");
let contenedor_3 = document.querySelector("#contenedor_3");
let contenedores = document.querySelectorAll(".contenedor"); //querySelectorAll selecciona todas las etiquetas de la clase
console.log(contenedores);

let seccion = document.getElementById("seccion");
let cajasContenedores = document.getElementsByTagName("div");
console.log(cajasContenedores);

//Colores
contenedor_1.style.background = "lightblue";
contenedor_2.style.background = "blueviolet";
contenedor_3.style.background = "lightgreen";

seccion.style.background = "cornsilk";

//Margenes
contenedor_1.style.margin = "15px";
contenedor_2.style.margin = "15px";
contenedor_3.style.margin = "15px";

//Paddings
contenedor_1.style.padding = "15px";
contenedor_2.style.padding = "15px";
contenedor_3.style.padding = "15px";
seccion.style.padding = "30px";

let parrafo = "";
let texto = "";
let hr = document.createElement("hr");

for (let div of cajasContenedores) {
    parrafo = document.createElement("p");
    texto = document.createTextNode(div.textContent);
    parrafo.appendChild(texto);
    seccion.appendChild(parrafo);
}
seccion.append(hr);

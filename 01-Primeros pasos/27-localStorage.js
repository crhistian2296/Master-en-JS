"use strict";

//Comprobar disponibilidad del Local Storage
typeof Storage !== "undefined"
    ? console.log("Local Storage disponible")
    : console.log("Local Storage no disponible");

//Guardar datos
localStorage.setItem("titulo", "Lo que el viento se llevo");

//Recuperar elemento
document.querySelector("#films").textContent = localStorage.getItem("titulo");

//Guardar objetos
let dogKiko = {
    nombre: "kiko",
    edad: 7,
    raza: "Yorkshire toy",
};

localStorage.setItem("kiko", JSON.stringify(dogKiko));

//Recuperar un objeto
let kikoJSON = JSON.parse(localStorage.getItem("kiko"));

let newDiv = document.createElement("div"); //creo el div
let newContent = document.createTextNode(
    //creo el nodo de texto
    `Nombre: ${kikoJSON.nombre} - Edad: ${kikoJSON.edad} - Raza: ${kikoJSON.raza}`
);

newDiv.appendChild(newContent); //añado el nodo de texto al div creado

document.body.append(newDiv);
console.log(kikoJSON);

localStorage.removeItem("kiko"); //remueve el elemento elegido del Local Storage
localStorage.clear(); //remueve todos los elementos del Local Storage

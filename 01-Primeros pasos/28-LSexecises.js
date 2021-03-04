"use strict";
let formulario = document.querySelector("#formPeliculas");

formulario.addEventListener("submit", () => {
    //add items to local storage
    let itemToAdd = document.querySelector("#addPelicula").value;

    if (itemToAdd.length > 0 && itemToAdd !== undefined) {
        localStorage.setItem(itemToAdd, itemToAdd);
    } else {
        console.error("Introduciste un titulo vacio");
    }

    //show items in console & document
    let ul = document.querySelector("#listaPelis");
    ul.innerHTML = "";

    console.group("Pelis");
    let itemPeli = "";
    const fragment = document.createDocumentFragment();
    for (let index in localStorage) {
        itemPeli = localStorage[index];
        if (typeof itemPeli == "string") {
            console.log(localStorage.getItem(itemPeli));

            /*FORMA 1
            let li = document.createElement("li");

            li.append(itemPeli);
            ul.append(li);
            */
            /*FORMA 2
            ul.innerHTML += `<li>${itemPeli}</li>`;
            */
            //FORMA 3 (evita el reflow ) fragment
            let li = document.createElement("li");
            li.append(itemPeli);

            fragment.append(li);
        }
        ul.append(fragment);
    }
    console.groupEnd();
});

let formEraser = document.querySelector("#formEraser");

formEraser.addEventListener("submit", () => {
    let itemToRemove = document.querySelector("#removePelicula").value;

    if (itemToRemove.length > 0 && itemToRemove !== undefined) {
        localStorage.removeItem(itemToRemove);
    }

    //show items in console & document
    let ul = document.querySelector("#listaPelis");
    ul.innerHTML = "";

    let itemPeli = "";
    for (let index in localStorage) {
        itemPeli = localStorage[index];
        if (typeof itemPeli == "string") {
            /* let li = document.createElement("li");

            li.append(itemPeli);
            ul.append(li); */
            ul.innerHTML += `<li>${itemPeli}</li>`;
        }
    }
});

//localStorage.clear();

"use strict";

const pokeList = document.querySelector("#pokemons");

//Promesas con fetch
fetch("https://pokeapi.co/api/v2/pokemon")
    .then((data) => data.json())
    .then((data) => data.results)
    .then((pokemonsArr) => {
        for (const pokemon of pokemonsArr) {
            console.log(pokemon.name);
            pokeList.innerHTML += `<li>${pokemon.name}</li>`;
        }
    });

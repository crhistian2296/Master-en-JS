"use strict";

//JSON JavaScript Object Notation
//objeto JSON
let elPadrino = {
    titulo: "El padrino",
    year: 2007,
    director: "Francis Ford Cappola",
};

let shrek = {
    titulo: "Shrek",
    year: 2001,
    director: "Dreamworks",
};

let filmSublibrary = [elPadrino, shrek];
let filmLibrary = [...filmSublibrary]; //uso de rest
let filmsdiv = document.querySelector("#films");

for (const index in filmLibrary) {
    //consola
    console.group("Pelicula " + index);
    console.log(`Titulo: ${filmLibrary[index].titulo}`);
    console.log(`Año: ${filmLibrary[index].year}`);
    console.log(`Director: ${filmLibrary[index].director}`);
    console.groupEnd();

    //document
    let p = document.createElement("p");
    p.append(
        filmLibrary[index].titulo +
            " - " +
            filmLibrary[index].year +
            " - " +
            filmLibrary[index].director
    );
    filmsdiv.append(p);
}

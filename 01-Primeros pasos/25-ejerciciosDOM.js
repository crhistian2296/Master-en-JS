"use strict";

window.addEventListener("load", () => {
    let formulario = document.querySelector("#formulario");
    let box__dashed = document.querySelector(".box__dashed");

    formulario.addEventListener("submit", () => {
        console.log("Evento submit capturado");

        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let edad = document.querySelector("#edad").value;
        box__dashed.style.display = "block";

        if (!isNaN(nombre) || nombre == null) {
            document.querySelector("#nombre").style.backgroundColor = "#ff6363";
            console.log(typeof nombre);
            alert("El nombre debe ser una cadena unicamente de texto");
            return false;
        }
        if (!isNaN(apellido) || nombre == null) {
            document.querySelector("#apellido").style.backgroundColor =
                "#ff6363";
            document.querySelector("#nombre").style.backgroundColor = "white";
            console.log(typeof apellido);
            alert("El apellido debe ser una cadena unicamente de texto");
            return false;
        }
        if (isNaN(edad)) {
            //campo con dato equivocado cambia a rojo
            document.querySelector("#edad").style.backgroundColor = "#ff6363";
            //campos anteriores vuelven a blanco
            document.querySelector("#nombre").style.backgroundColor = "white";
            document.querySelector("#apellido").style.backgroundColor = "white";
            alert("El edad debe ser un número");
            return false;
        } else {
            document.querySelector("#nombre").style.backgroundColor = "white";
            document.querySelector("#apellido").style.backgroundColor = "white";
            document.querySelector("#edad").style.backgroundColor = "white";
        }

        let user_data = [nombre, apellido, edad];

        for (const data of user_data) {
            let parrafo = document.createElement("p");
            parrafo.append(data);
            box__dashed.append(parrafo);
        }
    });
});

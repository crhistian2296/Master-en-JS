"use strict";
console.time();
window.addEventListener("load", () => {
    let boton = document.querySelector("#boton1");
    let backgroundColor = boton.style.background;
    boton.style.padding = "4px";
    boton.style.borderRadius = "4px";

    let formulario = document.querySelector("#form");
    formulario.style.padding = "15px 0px";

    let textField = document.querySelector("#nombre");

    //Defenicion de funciones
    function butonColor(newColor) {
        boton.style.background = newColor;
    }

    function textColor(newColor) {
        boton.style.color = newColor;
    }

    //click
    boton.addEventListener(
        "click",
        () => (boton.style.border = "2px solid red")
    );

    //mouseover
    boton.addEventListener("mouseover", () => butonColor("rgb(153, 109, 67)"));
    boton.addEventListener("mouseover", () => textColor("white"));

    //mouseout
    boton.addEventListener("mouseout", () => butonColor("#cccc"));
    boton.addEventListener("mouseout", () => textColor("black"));

    //focus
    textField.addEventListener("focus", () => {
        console.log("Estas dentro del input");
        textField.style.border = "2px solid green";
    });

    //blur
    textField.addEventListener("blur", () => {
        console.log("Estas fuera del input");
        textField.style.border = "1px solid darkgrey";
    });

    //keydown and keyrepeat
    textField.addEventListener("keydown", (e) =>
        !e.repeat
            ? console.log(`La letra "${e.key}" fue presionada`)
            : console.log(`La letra "${e.key}" se mantiene presionada`)
    );

    //keyup
    textField.addEventListener("keyup", (e) =>
        console.log(`La letra "${e.key}" fue soltada`)
    );
});
console.timeEnd();

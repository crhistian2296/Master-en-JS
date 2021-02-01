"use strict";

window.addEventListener("load", () => {
    let titulo = document.querySelector("h1");

    function startInterval() {
        //setInterval([function], [number])
        titulo.style.fontSize = "30px";

        let ciclo = setInterval(() => {
            titulo.style.fontSize == "30px"
                ? (titulo.style.fontSize = "40px")
                : (titulo.style.fontSize = "30px");
        }, 2000);

        return ciclo;
    }

    let ciclo = startInterval();

    let stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {
        console.log("Has detenido el tiempo del ciclo");
        clearInterval(ciclo);
    });

    let start = document.querySelector("#start");

    start.addEventListener("click", () => {
        console.log("Has iniciado el tiempo del ciclo");
        startInterval();
    });
});

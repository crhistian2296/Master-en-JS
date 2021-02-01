"use strict";

//BOM Browser Object Model

console.time();

function BOMproperties() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

const redirect = (url) => {
    window.location.href = url;
};
//redirect('https://mangadoor.com')

const openNewTab = (url) => {
    window.open(url, "", "width=1000, height=1000");
};
//openNewTab("https://mangadoor.com");

BOMproperties();
console.timeEnd();

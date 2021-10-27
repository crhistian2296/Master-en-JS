class Square {
  constructor(lado) {
    this.lado = lado;
  }

  get area() {
    return this.lado ** 2;
  }

  get perimetro() {
    return this.lado * 4;
  }

  printSquare() {
    let cadena;
    for (let i = 0; i < this.lado; i++) {
      cadena += "*  ".repeat(this.lado) + "\n";
    }
    return cadena;
  }
}

let cuadradoA = new Square(5);
// let area = cuadrado.area();
// let perimetro = cuadrado.perimetro();

console.log(`${cuadradoA.area}m^2`);
console.log(`${cuadradoA.perimetro}m`);
console.log(cuadradoA.printSquare());

console.log(" ");
console.log("===========================================");
console.log(" ");

const printTriangle = function (dimension) {
  let cadena;

  for (let j = 0; j < dimension; j++) {
    cadena += "*  "; //2 espacios
    console.log(cadena + "\n");
  }
};
printTriangle(9);

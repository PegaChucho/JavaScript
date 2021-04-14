let a = 10;

if (a % 2 == 0) {
  console.log("Número par");
} else {
  console.log("Nímero impar");
}

let b = 10;
let resultado=(b%2==0)?"Numero par":"Número impar";
console.log(resultado)


let edad = 18,
  adulto = 18;

let lic = edad >= adulto ? true : false;
console.log(lic);

if (edad >= adulto || lic == true) {
  //&& and, || or
  console.log("Usted es un adulto");
} else {
  console.log("Usted esta chikito");
}

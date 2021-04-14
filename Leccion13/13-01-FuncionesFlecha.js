function miFunction() {
    console.log("Saludos desde mi función");
}

let x = function () {
    console.log("Saludos desde mi función anónima");
}

// let miFuncionFlecha = () => {
//     console.log("Saludos desde mi función flecha")
// }

 const miFuncionFlecha = () => console.log("Saludos desde mi función flecha")

// const saludar = () => {
//     return "saludos desde funcion flecha 'saludar'"
// }

const saludar = () => "saludos desde funcion flecha 'saludar'"

const regresaObjeto = () => ({nombre:"Jesús", apellido:"Pérez"});

const funcionParametros = mensaje => console.log(mensaje);
const funcionSuma = (a,b) => a+b;

miFunction();
x();
miFuncionFlecha();
console.log(saludar());
console.log(regresaObjeto());
funcionParametros("holaaa");
console.log(funcionSuma(5,9));
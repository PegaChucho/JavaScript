/*
ComentariosJS
Hecho por Chucho
*/
//Tipo de dato string
var nombre = "Jesús";
var apellido = "Pérez";
var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

//Numero
var numero = 1000;
console.log(numero);

//Objeto
var objeto = {
  nombre: "Silvia",
  apellido: "Orozco",
  edad: 27,
};
console.log(objeto);

//boolean
var bandera = true;
console.log(bandera);

//funciones (tambien son un tipo de dato)
function miFuncion() {}
console.log(miFuncion);

//Symbol
var simbolo = Symbol("Mi símbolo");
console.log(typeof simbolo);

//Clase (las clases tambien son funciones)
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);

//Indefinido
var x;
console.log(x);

//Ausencia de valor, null es tipo object
var y = null;
console.log(y);

//arreglos (son de tipo object)
var autos = ["Toyota", "Honda", "Nissan"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);

//tipo de dato
tipoNombre = typeof nombre;
console.log(tipoNombre);

//Declaración de variables
nombre1 = "Silvia"; //sin especificar, no es buena práctica
let nombre2 = "Josué";
const apellido2 = "Orozco";
apellido2 = "Haba"; //no se puede

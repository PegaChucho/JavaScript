function miFuncion(a, b) {
  console.log("suma= " + (a + b));
  console.log(arguments.length);
}

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

function miFuncionImp(a, b) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}

let a = 3,
  b = 7;
miFuncion(a, b);

console.log(miFuncionImp(a, b));

//Declaración de tipo expresión
let x = function (a, b) {
  return a + b;
};
resultado = x(1, 2);

//Funcion flecha
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(5, 7));

//funcion self invoking
(function () {
  console.log("Ejecutando la función " + (a + b));
})();

//ejemplo parametros indefinidos
let resultadoIn = sumarTodo(5, 4, 13, 10, 9,10,11);
console.log(resultadoIn)

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

//Paso por valor
let x1=10;

function cambiarValor(a){
    a=20;
}

cambiarValor(x1);
console.log(x1);

//Paso por referencia
const persona= {
    nombre: "Jesús",
    apellido: "Pérez"
}

function cambiarObjeto (persona){
    persona.nombre="Chuy"
}

cambiarObjeto(persona);
console.log(persona);
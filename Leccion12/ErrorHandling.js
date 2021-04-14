'use strict';

try {
   let x = 10;
} catch (error) {
    console.log(error);
} finally {
    console.log("Fin del errorhandling")
}

let resultado=4;

try {
    //y=10
    if (isNaN(resultado)) throw "No es un número"
    else if (resultado === "") throw "Es una cadena vacía"
    else if (resultado >= 0) throw "Valor positivo"
    else if (resultado < 0) throw "Valor negativo"
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally {
    console.log("Fin del errorhandling 2")
}

console.log("Continuamos");
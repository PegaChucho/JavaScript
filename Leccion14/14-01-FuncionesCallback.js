function miFuncion1() {
    console.log("funcion 1")
}

function miFuncion2() {
    console.log("funcion 2")
}

//funcion callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(a, b, functionCallback){
    let res= a+b;
    functionCallback(`Resultado: ${res}`)
}

miFuncion1();
miFuncion2();

sumar(25,27,imprimir);

//Llamadas asíncronas con setTimeout

function miFuncionCallback (){
    console.log("Saludo asíncrono después de 5000s")
}

setTimeout(miFuncionCallback,5000);
setTimeout(()=>console.log("Saludo asíncrono después de 5000s"),5000);
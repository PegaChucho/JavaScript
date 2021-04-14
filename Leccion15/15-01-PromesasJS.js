"use strict";
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion) {
        resolved("Resolvió correctamente");
    } else {
        rejected("Se produjo un error")
    }
});

// miPromesa.then(
//     (valor) => console.log(valor),
//     (error) => console.log(error)
// );

// miPromesa
//     .then((valor) => console.log(valor))
//     .catch((error) => console.log(error));

let promesa = new Promise((resolved) => {
    // console.log("Espere...")
    setTimeout(() => { resolved("Saludos con promesa y timeout")}, 3000);
});

// promesa.then(valor => console.log(valor))

//async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}

// miFuncionConPromesa().then((valor) => console.log(valor))

//async con await
async function funcionConPromesaYAwait(){
    let miPromesa=new Promise(resolved => {
        resolved("Promesa con await")
    })

    console.log (await miPromesa)
}

//funcionConPromesaYAwait();

//promesas, await, async, timeout
async function funcionFinal(){
    let miPromesa= new Promise(resolved => {
       setTimeout(()=>resolved("Promesa con todas las funcionalidades"), 3000)
    });
    console.log("Espere...")
    console.log(await miPromesa);
    console.log("Gracias por esperar")
}

funcionFinal();
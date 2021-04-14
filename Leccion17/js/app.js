console.log("App calculadora")


function sumar() {

    const forma= document.getElementById("forma");
    console.log(forma);

    let opA = forma["operandoA"].value;
    let opB = forma["operandoB"].value;

    let resultado = (parseFloat(opA)  + parseFloat(opB));

    if (isNaN(resultado)==false){
        document.getElementById("resultado").innerHTML = resultado;
    }else{
        document.getElementById("resultado").innerHTML = "Operación incorrecta";
    }
}
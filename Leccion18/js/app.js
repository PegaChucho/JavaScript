let personas = [
    new Persona("Jesús", "Pérez"),
    new Persona("Silvia", "Orozco")
];

function mostrarPersonas(){
    console.log("Mostrando personas");
    let texto="";
    for (let persona of personas){
        console.log(persona.toString())
        texto +=`<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    console.log(texto)
    document.getElementById("personas").innerHTML=texto;
}

function agregarPersona(){
    const forma=document.forms["forma"];
    const nombre= forma["nombre"].value;
    const apellido=forma["apellido"].value;

    if (nombre!="" && apellido!=""){
        const persona = new Persona(nombre, apellido);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("No hay info que agregar")
    }
    }

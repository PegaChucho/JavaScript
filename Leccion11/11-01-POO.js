class Empleado {

    constructor(nombre, sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return `Empleado: [Nombre: ${this.nombre}, Sueldo: ${this.sueldo}]`
    }
}

class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento=departamento;
    }

    obtenerDetalles(){
        return `Gerente: [Nombre: ${this.nombre}, Sueldo: ${this.sueldo},
             Departamento: ${this.departamento}]`
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log("Es un objeto de tipo gerente");
    } else if (tipo instanceof Empleado){
        console.log("Es un objeto de tipo empleado");
    }else if(tipo instanceof Object){
        console.log("Es un objeto de tipo object");
    }
}

let empleado1= new Empleado("Silvia",25000);
//console.log(empleado1.obtenerDetalles())
imprimir(empleado1);


let gerente1= new Gerente("Jesús", 16000, "sistemas");
//console.log(gerente1.obtenerDetalles());
imprimir(gerente1);
class Persona {
  static contadorPersonas = 0;
  static get MAX_PER() {
    return 5;
  }

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    if (Persona.contadorPersonas < Persona.MAX_PER) {
      this._idPersona = ++Persona.contadorPersonas;
    } else {
      console.log(
        "Se ha superdado el numero máximo de personas: " + Persona.MAX_OBJ
      );
    }
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
  }

  toString() {
    return (
      this.idPersona +
      ": " +
      this.nombre +
      " " +
      this.apellido +
      " " +
      this.edad
    );
  }
}

class Empleado extends Persona {
  static contadorEmpleado = 0;
  static get MAX_EMP() {
    return 5;
  }

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    if (Empleado.contadorEmpleado < Empleado.MAX_EMP) {
      this._idEmpleado = ++Empleado.contadorEmpleado;
    } else {
      console.log(
        "Se ha superdado el numero máximo de personas: " + Empleado.MAX_EMP
      );
    }
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return (
      this.idEmpleado +
      ": " +
      this.nombre +
      " " +
      this.apellido +
      " " +
      this.edad +
      " " +
      this.sueldo
    );
  }
}

class Cliente extends Persona {
  static contadorCliente = 0;
  static get MAX_CLI() {
    return 5;
  }

  constructor(nombre, apellido, edad, fecha) {
    super(nombre, apellido, edad);
    this._fecha = fecha;
    if (Cliente.contadorCliente < Cliente.MAX_CLI) {
      this._idCliente = ++Cliente.contadorCliente;
    } else {
      console.log(
        "Se ha superdado e numero máximo de personas: " + Cliente.MAX_CLI
      );
    }
  }

  get idCliente() {
    return this._idCliente;
  }

  get fecha() {
    return this._fecha;
  }
  set fecha(fecha) {
    this._fecha = fecha;
  }

  toString() {
    return (
      this.idCliente +
      ": " +
      this.nombre +
      " " +
      this.apellido +
      " " +
      this.edad +
      " " +
      this.fecha
    );
  }
}


let persona1 = new Persona("Jesus","Pérez",25);
console.log(persona1.toString());

let empleado1 = new Empleado("Jesus","Pérez",25,16000);
console.log(empleado1.toString());

let cliente1= new Cliente("Jesus","Pérez",25,new Date())
console.log(cliente1.toString());

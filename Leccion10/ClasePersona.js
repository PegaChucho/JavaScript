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



let cliente1 = new Cliente("Eva", "Garcia", 65, new Date());
console.log(cliente1._idCliente);
console.log(Cliente.contadorCliente);

class Persona {
  static contadorPersonas = 0;

  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas > Persona.MAX_OBJ) {
      this._idPersona = ++Persona.contadorPersonas;
    } else {
      console.log(
        "Se ha superdado e numero máximo de personas: " + Persona.MAX_OBJ
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

  nombreCompleto() {
    return this._idPersona + " " + this._nombre + " " + this.apellido;
  }

  toString() {
    return this.nombreCompleto();
  }

  static saludar() {
    console.log("Saludos desde el método static");
  }

  static saludar2(persona) {
    console.log("Hola " + persona.nombre);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  //sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Jesus", "Pérez");
console.log(persona1);
persona1.nombre = "Chuy";
console.log(persona1.nombre);
console.log(persona1.email);
console.log(persona1.toString());
//persona1.saludar(); no se puede llamar un metodo estatico desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

let persona2 = new Persona("Silvia", "Orozco");
console.log(persona2);
console.log(persona2.toString());

console.log(Persona.MAX_OBJ);

let empleado1 = new Empleado("Jesus", "Pérez", "Cloud");
console.log(empleado1);
console.log(empleado1.email);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
Empleado.saludar();
Empleado.saludar2(empleado1);

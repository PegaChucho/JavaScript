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
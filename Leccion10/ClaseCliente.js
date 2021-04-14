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
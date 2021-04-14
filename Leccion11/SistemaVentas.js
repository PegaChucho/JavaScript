class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idproducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return (
      "ID: " +
      this._idProducto +
      ", Nombre: " +
      this._nombre +
      ", Precio: " +
      this._precio
    );
  }
}

class Orden {
  static contadorOrdenes = 0;
  static get MAX_PROD() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductos = 0;
  }

  get idOrden (){
      return this._idOrden
  }

  agregarProducto(producto) {
    if (this._contadorProductos < Orden.MAX_PROD) {
      this._productos[this._contadorProductos++] = producto;
    } else {
      throw new Error("Numero de productos por orden excedido");
    }
  }

  calcularTotal() {
    let total = 0;
    for (var i = 0; i < this._contadorProductos; i++) {
      let producto = this._productos[i];
      total += producto._precio;
    }
    return total;
  }

  mostarOrden() {
    console.log("Id Orden: " + this._idOrden);
    let totalOrden = this.calcularTotal();
    console.log("Total= $" + totalOrden);

    if (this._contadorProductos > 0) {
      console.log("productos de la orden:");
      for (var i = 0; i < this._contadorProductos; i++) {
        console.log(this._productos[i] +"\n");
      }
    } else {
      throw new Error("No hay productos agregados");
    }
  }
}

let producto1 = new Producto("PlayStation", 14999);
let producto2 = new Producto("Switch", 7999);
let producto3 = new Producto("PC", 39999);
let producto4 = new Producto("Xbox series S", 6500);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
console.log(orden1)

orden1.mostarOrden();

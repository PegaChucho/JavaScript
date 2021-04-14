"use strict";
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [ID: ${this._idRaton} , Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [ID: ${this._idTeclado} , Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor: [ID: ${this._idMonitor} , Marca: ${this._marca}, Tamaño: ${this._tamaño}"]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora
    }

    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre
    }

    get monitor() {
        return this._monitor
    }
    set monitor(monitor) {
        this._monitor = monitor
    }

    get teclado() {
        return this._teclado
    }
    set teclado(teclado) {
        this._teclado = teclado
    }

    get raton() {
        return this._raton
    }
    set raton(raton) {
        this._raton = raton
    }

    toString() {
        return `Computadora: [ID: ${this._idComputadora},
        ${this._nombre.toString()},
        ${this._monitor.toString()}, 
        ${this._teclado.toString()},
        ${this._raton.toString()} ]`
    }

}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_ITEMS() {
        return 3;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
        this._contadorItems = 0; //no se ocupa
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        if (this._computadoras.length < Orden.MAX_ITEMS) {
            this._computadoras.push(computadora);
            this._contadorItems++;
        } else {
            throw new Error("Numero de productos por orden excedido");
        }

    }

    mostrarOrden() {
        let productosOrden = "";
        for (let computadora of this._computadoras) {
            productosOrden += `\n{'  ${computadora} '}`;
        }
        console.log(`Orden: ${this._idOrden} Computadoras: ${productosOrden} `);
    }

}

let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());
let teclado1 = new Teclado("USB", "HP");
console.log(teclado1.toString());
let monitor1 = new Monitor("msi", 27)
console.log(monitor1.toString())

let computadora1 = new Computadora("PC normal", monitor1, teclado1, raton1);
let computadora2 = new Computadora("PC normal", monitor1, teclado1, raton1);
let computadora3 = new Computadora("PC normal", monitor1, teclado1, raton1);
let computadora4 = new Computadora("PC normal", monitor1, teclado1, raton1);
console.log(computadora1.toString())

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);

orden1.mostrarOrden();

console.log(orden1._computadoras.length)
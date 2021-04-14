let persona1 = {
  nombre: "Jesús",
  apellido: "Pérez",
  nombreCompleto: function (titulo, tel) {
    return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
  },
};

let persona2 = {
  nombre: "Silvia",
  apellido: "Orozco",
};

//apply
console.log(persona1.nombreCompleto("Ing.",5538780254));

let array =["Ing.", 5538780254]
console.log(persona1.nombreCompleto.apply(persona2, array));



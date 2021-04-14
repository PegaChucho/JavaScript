var hora = 6;
let mensaje;

if (hora >= 6 && hora <= 11) {
  mensaje = "Buenos días";
} else if (hora >= 12 && hora <= 18) {
  mensaje = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
  mensaje = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  mensaje = "Durmiendo";
} else {
  console.log("Horario no válido");
  mensaje == null;
}

console.log(mensaje);

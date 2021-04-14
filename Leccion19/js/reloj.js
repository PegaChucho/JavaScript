const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoTiempo(fecha.getHours());
    let minutos = formatoTiempo(fecha.getMinutes());
    let segundos = formatoTiempo(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses= ["Ene", "Feb,", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias= ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana=dias[fecha.getDay()];
    let dia=fecha.getDay();
    let mes=meses[fecha.getMonth()];
    let año= fecha.getFullYear();

    document.getElementById("fecha").innerHTML = `${diaSemana} ${dia} de ${mes}, ${año}`;

    document.getElementById("contenedor").classList.toggle("animar")
}

const formatoTiempo = (tiempo) => { //tiempo puede ser hora, min o sec.
    if (tiempo < 10) {
        tiempo = "0" + tiempo
    }
    return tiempo
}

setInterval(mostrarReloj, 1000);
/**
 * Alvaro Leiva Toledano
 */

function Alumno(nombre, apellido1, apellido2, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.fechaNacimiento = fechaNacimiento;
}

let iniciar = () => {
    let nombre = opener.document.getElementById("nombre").value;
    let apellido1 = opener.document.getElementById("apellido1").value;
    let apellido2 = opener.document.getElementById("apellido2").value;
    let fechaNacimiento = opener.document.getElementById("fecha").value;

    alumno = new Alumno(nombre, apellido1, apellido2, fechaNacimiento);
    alumno.mostrar();
}

Alumno.prototype.mostrar = function () {
    container = document.getElementById("contenedor");
    container.innerHTML = `<h1>Álvaro Leiva Toledano</h1><p>Nombre del alumno: ` + alumno.nombre + `</p><p>Apellidos: ` + alumno.apellido1 + ` ` + alumno.apellido2 + `</p><p>Edad: ` + alumno.fechaNacimiento + `</p>`;
}

document.addEventListener("DOMContentLoaded", iniciar);
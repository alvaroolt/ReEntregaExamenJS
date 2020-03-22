/**
 * Alvaro Leiva Toledano
 */

validarFechaNacimiento = function (fecha) {
    const re = /^(\d{2})([-/])(\d{2})\2(\d{4})$/;

    if (!re.test(fecha.trim())) {
        return `Error. La fecha es errónea.`;
    }
    else {

        // compruebo si la fecha de nacimiento es posterior a la fecha actual, cosa que estaría mal
        let [, dia, , mes, anno] = re.exec(fecha);
        dia = Number(dia);
        mes = Number(mes);
        anno = Number(anno);
        let date = new Date(`${anno}/${mes}/${dia}`);
        let hoy = new Date();

        if (date.getFullYear() === anno && date.getMonth() === mes - 1 && date.getDate() === dia) {
            if ((hoy.getFullYear() < anno) || (hoy.getFullYear() === anno && (hoy.getMonth() + 1) < mes) || (hoy.getFullYear() === anno && (hoy.getMonth() + 1) === mes && hoy.getDate() < dia)) {
                return "No puedes nacer en el futuro.";
            }
            else {
                return "";
            }
        }
        else {
            return "La fecha introducida no es correcta.";
        }
    }
}

let crearAlumno = () => {
    if (document.getElementById("nombre").value && document.getElementById("apellido1").value && document.getElementById("apellido2").value && validarFechaNacimiento(document.getElementById("fecha").value) == "") {
        let nuevaVentana = window.open("", "", "width=300px,height=200px");
        nuevaVentana.document.write(`
        <html>
        <head>
        <title id="titulo">Álvaro Leiva Toledano</title>
        <script src="js/Alumno.js"></script>
        </head>
        <body>
        <div id="contenedor"></div>
        </body>
        </html>
        `);
        nuevaVentana.document.close();
    }
}

let iniciar = function () {
    document.getElementById("crear").addEventListener("click", crearAlumno);
}

document.addEventListener("DOMContentLoaded", iniciar);
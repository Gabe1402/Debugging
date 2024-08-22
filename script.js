
document.getElementById("formularioGenerador").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var fechaSeleccionada = new Date(document.getElementById("fechaGenerador").value + "T" + document.getElementById("horaGenerador").value);
	console.log(fechaSeleccionada)
    var nombre = document.getElementById("nombreGenerador").value;
    var telefono = document.getElementById("telefonoGenerador").value;
    var alumno = document.getElementById("alumnoGenerador").value;
    var edad = document.getElementById("edad").value;
    var gradoEscolarTexto = document.getElementById("gradoEscolarTexto").value;
    var gradoEscolarSelect = document.getElementById("gradoEscolar").value;
    var modalidadGenerador = document.getElementById("modalidadGenerador").value;



    var diaSemana = fechaSeleccionada.getDay();

    if (diaSemana === 0) {
        alert("No puedes seleccionar un evento para un domingo.");
        return; 
    }

    var matematicas = document.getElementById("formularioGenerador").querySelector('input[name="matematicas"]').checked;
    var lectura = document.getElementById("formularioGenerador").querySelector('input[name="lectura"]').checked;
    var ingles = document.getElementById("formularioGenerador").querySelector('input[name="ingles"]').checked;
    var sesionInformativa = document.getElementById("formularioGenerador").querySelector('input[name="sesion_informativa"]').checked;
    var examenDiagnostico = document.getElementById("formularioGenerador").querySelector('input[name="examen_diagnostico"]').checked;
    var entregaResultados = document.getElementById("formularioGenerador").querySelector('input[name="entrega_resultados"]').checked;

 
    if (!sesionInformativa && !examenDiagnostico && !entregaResultados && !matematicas && !lectura && !ingles) {
        alert("Debes seleccionar al menos una opción (sesión informativa, examen diagnóstico, entrega de resultados o asignaturas).");
        return; 
    }

    if (sesionInformativa && examenDiagnostico && entregaResultados) {
        alert("No puedes seleccionar los tres checkboxes al mismo tiempo.");
        return;
    }

    var textoGenerado = "";

    
    if (sesionInformativa && examenDiagnostico) {
        textoGenerado += "ℹ 📝 *SESIÓN INFORMATIVA Y EXAMEN DIAGNÓSTICO* ℹ 📝<br>";
    } else {
        if (sesionInformativa) {
            textoGenerado += "ℹ *SESIÓN INFORMATIVA* ℹ<br>";
        }
        if (examenDiagnostico) {
            textoGenerado += "📝 *EXAMEN DIAGNÓSTICO* 📝<br>";
        }
        if (entregaResultados) {
            textoGenerado += "🔎 *ENTREGA DE RESULTADOS* 🔎<br>";
        }
    }

    if (matematicas) {
        textoGenerado += "Matemáticas ";
    }
    if (lectura) {
        textoGenerado += "Lectura ";
    }
    if (ingles) {
        textoGenerado += "Inglés";
    }

    if (modalidadGenerador === "") {
        alert("Debes seleccionar una modalidad.");
        return; 
    }

    textoGenerado += `<br><br>🧑🏻  *${nombre}*<br>📅  *${formatoFecha(fechaSeleccionada)}*<br>🕓  *${formatoHora(fechaSeleccionada)}*<br>📍 *${modalidadGenerador}*<br>☎  *${telefono}*<br>-------------------------<br>*Información del alumno:*<br><br>${alumno}, ${edad} años<br>${gradoEscolarTexto}° de ${gradoEscolarSelect}`;

    document.getElementById("resultadoGenerador").innerHTML = textoGenerado;

    copiarTextoAlPortapapeles(textoGenerado);

    mostrarMensajeCopiado("resultadoGenerador");

//     {document.getElementById("btnResetGenerador").addEventListener("reset")
//     //     document.getElementById('formularioGenerador').reset();
//     //     document.getElementById("resultadoGenerador").innerHTML = "as";
//     alert("test");
// }



});

var btnResetGenerador = document.getElementById('btnResetGenerador');

btnResetGenerador.addEventListener('click', function() {
    limpiarGenerador(); 
});

function limpiarGenerador() {
    document.getElementById("resultadoGenerador").innerHTML = "";
    console.log('Se ha limpiado el generador');
}




// Reuniones de Avance
document.getElementById("formularioReuniones").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fecha = new Date(document.getElementById("fechaReuniones").value + "T" + document.getElementById("horaReuniones").value);
    var alumno = document.getElementById("alumno").value;


    var diaSemana = fecha.getDay();

    if (diaSemana === 0) {
        alert("No puedes seleccionar un evento para un domingo.");
        return;
    }
    var textoGenerado = `Buenas tardes.<br><br>Nos gustaría agendar con usted una *Reunión de Avances*, en donde se tratarán temas relacionados con el desempeño de *${alumno}*, y también podremos solventar sus dudas o inquietudes.<br><br>Detalles de la reunión:<br>📅  *${formatoFecha(fecha)}*<br>🕓  *${formatoHora(fecha)}*<br><br>La reunión será llevada a cabo por *Zoom*.<br>Utilice el siguiente enlace para acceder a la reunión:<br>🔗  https://kumon.zoom.us/j/81600498243?pwd=TTk2Q1E3TW1PSVV1MXdJeXNvb2lJdz09<br><br>*¿Confirmamos la reunión o le gustaría agendar otro día?*`


    document.getElementById("resultadoReuniones").innerHTML = `<p>${textoGenerado}</p>`;

    copiarTextoAlPortapapeles(textoGenerado);

    mostrarMensajeCopiado("resultadoReuniones");
});

document.getElementById("tercerDia").addEventListener("change", function() {
    var tercerDiaContenido = document.getElementById("tercerDiaContenido");
    if (this.checked) {
        tercerDiaContenido.style.display = "block";
    } else {
        tercerDiaContenido.style.display = "none";
    }
});

function formatearHora(hora) {
    const [horaComponentes, minutoComponentes] = hora.split(":");
    let horaFormateada = parseInt(horaComponentes);
    let periodo = 'am';

    if (horaFormateada >= 12) {
        periodo = 'pm';
        if (horaFormateada > 12) {
            horaFormateada -= 12;
        }
    }
    if (horaFormateada === 0) {
        horaFormateada = 12;
    }

    return `${horaFormateada}:${minutoComponentes} ${periodo}`;
}


document.getElementById("formularioNuevoIngreso").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var alumno = document.getElementById("alumnoNuevoIngreso").value;
	var horaFantasma ="12:00"
	var fecha = new Date(document.getElementById("fechaNuevoIngreso").value + "T" + horaFantasma);
	console.log(fecha)
	console.log(horaFantasma)

    var modalidad = document.getElementById("modalidadNuevoIngreso").value;
    var dia1 = document.getElementById("dia1").value;
    var hora1 = formatearHora(document.getElementById("hora1").value);
    var dia2 = document.getElementById("dia2").value;
    var hora2 = formatearHora(document.getElementById("hora2").value);
    var textoGenerado = `*. : | NUEVO INGRESO | : .*<br><br>*${alumno}* se incorpora a Kumon Coyoacán Oriente.<br>*Primera sesión: ${formatoFecha(fecha)}.*<br><br>Horarios:<br>${dia1} - ${hora1}<br>${dia2} - ${hora2}<br><br>Modalidad: ${modalidad}<br><br>Asistente: `;

        var diaSemana = fecha.getDay();

        if (diaSemana === 0) {
            alert("No puedes seleccionar un evento para un domingo.");
            return; 
        }


    if (document.getElementById("tercerDia").checked) {
        var dia3 = document.getElementById("dia3").value;
        var hora3 = (document.getElementById("hora3").value);
        textoGenerado += `<br>Día 3: ${dia3} a las ${hora3}`;
    }

    document.getElementById("resultadoNuevoIngreso").innerHTML = textoGenerado;

    copiarTextoAlPortapapeles(textoGenerado);
});

var btnCopiarNuevoIngreso = document.getElementById("btnCopiarNuevoIngreso");
btnCopiarNuevoIngreso.addEventListener("click", function() {
    copiarTextoAlPortapapeles(document.getElementById("resultadoNuevoIngreso").innerHTML);
});


// CAMBIO HORARIOS
document.getElementById("formularioHorarios").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var alumno = document.getElementById("alumnoHorarios").value;
	var horaFantasma ="12:00"
	var fecha = new Date(document.getElementById("fechaHorarios").value + "T" + horaFantasma);
	console.log(fecha)
	console.log(horaFantasma)

    var modalidad = document.getElementById("modalidadHorarios").value;
    var dia1 = document.getElementById("dia1Horarios").value;
    var hora1 = formatearHora(document.getElementById("hora1Horarios").value);
    var dia2 = document.getElementById("dia2Horarios").value;
    var hora2 = formatearHora(document.getElementById("hora2Horarios").value);
    var textoGenerado = `*. : | MODIFICACIÓN DE HORARIOS | : .*<br><br>*${alumno}* Modifica los horarios de sus sesiones.<br><br>Nuevos horarios:<br>${dia1} - ${hora1}<br>${dia2} - ${hora2}<br><br>*A partir de: ${formatoFecha(fecha)}.*<br><br>Modalidad: ${modalidad}<br><br>Asistente: `;

        var diaSemana = fecha.getDay();

        if (diaSemana === 0) {
            alert("No puedes seleccionar un evento para un domingo.");
            return; 
        }



    document.getElementById("resultadoHorarios").innerHTML = textoGenerado;

    copiarTextoAlPortapapeles(textoGenerado);
});

var btnCopiarNuevoIngreso = document.getElementById("btnCopiarHorarios");
btnCopiarNuevoIngreso.addEventListener("click", function() {
    copiarTextoAlPortapapeles(document.getElementById("resultadoHorarios").innerHTML);
});



function copiarTextoAlPortapapeles(texto) {
    var textarea = document.createElement("textarea");
    textarea.value = texto.replace(/<br>/g, "\n");
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}



  // FALTAS

    document.getElementById("formularioFaltas").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        var alumno = document.getElementById("alumnoFaltas").value;
        var motivo = document.getElementById("motivoFaltas").value;
        var solicitaMaterial = document.getElementById("solicitaMaterial").checked;
        var cuandoPasan = document.getElementById("cuandoPasan").value;
    
        var textoGenerado = `*. : | INCIDENCIA | : .*<br><br>*${alumno}* no asiste a la sesión de hoy.<br>*Motivo*: ${motivo}<br><br>`;
        textoGenerado += solicitaMaterial ? `✅ *Solicita material* ✅<br>Pasarán por el ${cuandoPasan}<br><br>` : `❌ *No solicita material* ❌<br><br>`;
    
        document.getElementById("resultadoFaltas").innerHTML = `<p>${textoGenerado}</p>`;
    
        copiarTextoAlPortapapeles(textoGenerado);
    
        mostrarMensajeCopiado("resultadoFaltas");
    });

document.getElementById("solicitaMaterial").addEventListener("change", function() {
    var cuandoPasanDiv = document.getElementById("cuandoPasanDiv");
    cuandoPasanDiv.style.display = this.checked ? "block" : "none";
});





function formatoFecha(fecha) {
    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var nombreDia = diasSemana[fecha.getDay()];
    var numeroDia = fecha.getDate();
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var nombreMes = meses[fecha.getMonth()];
    return `${nombreDia}, ${numeroDia} de ${nombreMes}`;
}



function formatoHora(fecha) {
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var ampm = horas >= 12 ? 'pm' : 'am';
    horas = horas % 12;
    horas = horas ? horas : 12; 
    return `${horas}:${minutos < 10 ? '0' + minutos : minutos} ${ampm}`;
}

function copiarTextoAlPortapapeles(texto) {
    var textarea = document.createElement("textarea");
    textarea.value = texto.replace(/<br>/g, "\n").replace(/<\/?p>/g, "");
    textarea.style.position = "fixed"; 
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function mostrarMensajeCopiado(idResultado) {
    var mensajeCopiado = document.createElement("div");
    document.getElementById(idResultado).appendChild(mensajeCopiado);
}

var btnCopiarGenerador = document.getElementById("btnCopiarGenerador");
btnCopiarGenerador.addEventListener("click", function() {
    copiarTextoAlPortapapeles(document.getElementById("resultadoGenerador").textContent);
});

var btnCopiarReuniones = document.getElementById("btnCopiarReuniones");
btnCopiarReuniones.addEventListener("click", function() {
    copiarTextoAlPortapapeles(document.getElementById("resultadoReuniones").textContent);
});




document.addEventListener('DOMContentLoaded', () => {
    const meetingTypeSelect = document.getElementById('meetingType');
    const availabilityTableBody = document.querySelector('#availabilityTable tbody');
    const availabilityTableTh = document.querySelector('#availabilityTable tr');

    meetingTypeSelect.addEventListener('change', function() {
        const type = this.value;
        availabilityTableBody.innerHTML = '';  

        if (type) {
            const { days, times } = data[type];

            const sortedTimes = times.sort((a, b) => {
                return a.localeCompare(b, undefined, { hour: 'numeric', minute: 'numeric' });
            });

           
            function formatTime(time) {
                const [hour, minute] = time.split(':').map(Number);
                const period = hour >= 12 ? 'pm' : 'am';
                const formattedHour = hour % 12 || 12; 
                const formattedMinute = minute ? `:${minute}` : '';
                return `${formattedHour}${formattedMinute}${period}`;
            }

            sortedTimes.forEach(timeSlot => {
                const row = document.createElement('tr');
                const timeCell = document.createElement('td');
                timeCell.textContent = formatTime(timeSlot);
                row.appendChild(timeCell);
            
                for (let i = 1; i < availabilityTableTh.children.length; i++) {
                    const cell = document.createElement('td');
                    const day = availabilityTableTh.children[i].textContent.toLowerCase();
            
                    if (day === "sábado") {
                        // Check if the time is one of the allowed times for "Sábado"
                        if (["11:00", "11:30", "12:00", "12:30", "13:00"].includes(timeSlot)) {
                            cell.textContent = '✅';
                        } else {
                            cell.textContent = 'X';
                        }
                    }else if (day === "viernes" && type === "reunionesDeAvance" && timeSlot === "16:00") {
                            cell.textContent = '✅';
                    } else if (type === "reunionesDeAvance") {
                        if(["16:00"].includes(timeSlot)) {
                            cell.textContent = 'X'
                        } else {
                            cell.textContent = '✅';
                        }
                    } else if (days.map(d => d.toLowerCase()).includes(day)) {
                        cell.textContent = '✅';
                    } else {
                        cell.textContent = 'X';
                    }
            
                    row.appendChild(cell);
                }
            
                availabilityTableBody.appendChild(row);
            });

            if (availabilityTableBody.childElementCount === 0) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 7;
                cell.textContent = 'No hay fechas disponibles';
                row.appendChild(cell);
                availabilityTableBody.appendChild(row);
            }
        } else {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 7;
            cell.textContent = 'Seleccione un tipo de reunión para ver la disponibilidad.';
            row.appendChild(cell);
            availabilityTableBody.appendChild(row);
        }
    });
});



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName("tablinks")[0].click();
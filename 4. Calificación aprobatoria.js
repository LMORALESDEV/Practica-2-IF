/*4. Calificación aprobatoria
Pide una calificación (número del 0 al 100) e indica si es una calificación
aprobatoria (60 o más) o reprobatoria.*/

let calificacion = prompt("Ingrese su calificación (0-100):");
if (calificacion >= 60 && calificacion <= 100) {
    alert("La calificación es aprobatoria.");
    console.log("La calificación es aprobatoria.");
} else if (calificacion < 60 && calificacion >= 0) {
    alert("La calificación es reprobatoria.");
    console.log("La calificación es reprobatoria.");
}
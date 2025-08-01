/*7. Hora del día
Solicita una hora (número del 0 al 24) e indica si es de mañana (0-11), tarde (12-18)
o noche (19-24).*/

let hora = parseInt(prompt("Ingrese una hora (0-24):"));

if (hora >= 0 && hora < 11) {
    console.log("Es de mañana.");
}
else if (hora >= 12 && hora < 19) {
    console.log("Es de tarde.");
} else if (hora >= 19 && hora <= 24) {
    console.log("Es de noche.");
} else {
    console.log("Hora no válida. Debe estar entre 0 y 24.");
}

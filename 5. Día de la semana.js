/*5. Día de la semana
Solicita un número del 1 al 7 y usa if para mostrar el día de la semana
correspondiente (por ejemplo, 1 es lunes, 2 es martes, etc.).
*/

let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

if (numero === 1) {
    alert("Lunes");
    console.log("Lunes");
}
else if (numero === 2) {
    alert("Martes");
    console.log("Martes");
} else if (numero === 3) {
    alert("Miércoles");
    console.log("Miércoles");
} else if (numero === 4) {
    alert("Jueves");
    console.log("Jueves");
} else if (numero === 5) {
    alert("Viernes");
    console.log("Viernes");
} else if (numero === 6) {
    alert("Sábado");
    console.log("Sábado");
} else if (numero === 7) {
    alert("Domingo");
    console.log("Domingo");
} else {
    alert("Número inválido. Debe ser del 1 al 7.");
    console.log("Número inválido. Debe ser del 1 al 7.");
}
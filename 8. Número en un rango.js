/*8. Número en un rango
Pide al usuario un número y usa if para verificar si está en el rango de 1 a 100.
Muestra un mensaje indicando si el número está en el rango o no.*/

numero = prompt("Ingrese un número:");

if (numero >= 1 && numero <= 100) {
    console.log("El número está en el rango de 1 a 100.");
}
else {
    console.log("El número no está en el rango de 1 a 100.");
}

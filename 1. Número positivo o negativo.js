/*1. Número positivo o negativo
Pide al usuario que ingrese un número. Usa una condicional if para verificar si el
número es positivo, negativo o cero, y muestra un mensaje adecuado.*/

let numeromixto = prompt("Ingrese un número positivo o negativo:");

if (numeromixto > 0) {
    console.log("El número es positivo.");
} else if (numeromixto < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

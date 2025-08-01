/*6. Mayor de dos números
Pide al usuario que ingrese dos números y usa una condicional if para determinar
cuál de los dos números es mayor.
*/

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
    alert("El primer número es mayor: " + numero1);
    console.log("El primer número es mayor: " + numero1);
}else  {
    alert("El segundo número es mayor: " + numero2);
    console.log("El segundo número es mayor: " + numero2);
}
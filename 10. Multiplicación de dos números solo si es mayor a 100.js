/*10. Multiplicación de dos números solo si es mayor a 100
Solicita al usuario dos números. Si el producto de los dos números es mayor a 100,
muestra el resultado; de lo contrario, muestra un mensaje diciendo que el producto
es menor o igual a 100.*/

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 * num2 > 100) {
    alert("El producto de " + num1 + " y " + num2 + " es: " + (num1 * num2));
    console.log("El producto de " + num1 + " y " + num2 + " es: " + (num1 * num2));
} else {
    alert("El producto de " + num1 + " y " + num2 + " es menor o igual a 100.");
    console.log("El producto de " + num1 + " y " + num2 + " es menor o igual a 100.");
}

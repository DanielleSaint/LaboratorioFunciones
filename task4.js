//Calcular promedio de notas
const prompt = require("prompt-sync")();

let notasTotal = (prompt("ingresa las notas separadas por coma(,): ").split(","));

function calcularPromedio(notas){
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
       suma += parseFloat(notas[i]);
    }
    let promedio = suma/notas.length;
    return promedio.toFixed(2);
}

console.log("El promedio de notas es: "+calcularPromedio(notasTotal));

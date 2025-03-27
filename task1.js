//Carlular propina
const prompt = require("prompt-sync")();

let cuenta = Number(prompt("Total cuenta: "));
let propina = Number(prompt("% Propina: "));

function calcularPropina(total, porcentaje) {
    totalPropina = (total * porcentaje)/100;
    return totalPropina + total
}

console.log("Total a pagar + propina: " + calcularPropina(cuenta, propina));

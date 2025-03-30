// Simulador de Cajero Automático
const prompt = require("prompt-sync")();

let Saldo = Number(prompt("Saldo actual: $"));
let Monto = Number(prompt("Monto a retirar: $"));

function retirarDinero(saldo, monto){
    if (saldo >= monto) {
        console.log(`Su monto a retirar es: $${monto}, saldo disponible $${saldo - monto}`);
    } else {
        console.log("Fondos insuficientes");
    }
}
retirarDinero(Saldo,Monto);


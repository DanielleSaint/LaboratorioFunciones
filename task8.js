// Cambio de moneda
const prompt = require("prompt-sync")();

let Monto = Number(prompt("Monto a cambiar en COP: $"));
let Conversion = prompt("Escoja la opcion de cambio USD o EUR: ").toUpperCase();

function convertirMoneda(monto, monedaDestino){
    if (monedaDestino === "EUR") {
        let convertidor = (monto / 4493.90).toFixed(2)
        console.log(`Total monto a euros: ${convertidor}€`);
    }
    else {
        let convertidor = (monto / 4153.10).toFixed(2)
        console.log(`Total monto a dolares: ${convertidor}$`);
    }
}
convertirMoneda(Monto, Conversion);

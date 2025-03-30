// Contar palabras
const prompt = require("prompt-sync")();

let Texto = prompt("Empieza a escribir: ").split(" ");

function contarPalabras(texto) {
    return texto.length;
}

const TotalPalabras = contarPalabras(Texto);
console.log(TotalPalabras);

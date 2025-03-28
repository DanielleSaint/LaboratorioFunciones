//Validar contraseña
const prompt = require("prompt-sync")();

let contraseña = prompt("Ingresa tu contraseña: ");

function validacion(password) {
        return /[A-Z]/.test(password) && /\d/.test(password) && password.length >=8;
}
console.log(validacion(contraseña));
 

 

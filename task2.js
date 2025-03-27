//Validar contraseña
const prompt = require("prompt-sync")();

let contraseña = prompt("Escribe tu contraseña: ");

let letraMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";


function validacion(password) {
    if (contraseña.length >= 8){
        return true
    }else {
        console.log("La contraseña debe tener 8 o mas caracteres");
    }
    for (let i = 0; i < password.length; i++) {
        if (letraMayus.includes(password[i]) && num.includes(password[i])){
            return true
        }
        console.log("La contraseña debe incluir al menos una letra en Mayuscula y un numero");
    }
    if (validacion == true){
        console.log("Contraseña exitosa");  
    }
}
validacion(contraseña);

 

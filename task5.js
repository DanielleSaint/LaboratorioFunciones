//Filtrar Usuarios por Edad
const prompt = require("prompt-sync")();

let edadMinima = Number(prompt("Ingrese edad: "));

const usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Dani", edad: 31},
    {nombre: "David", edad: 20},
    {nombre: "Carlos", edad: 17},
]

function filtrarUsuarios(usuario, edadMinima) {
    let listaUsuarios = [];
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].edad >= edadMinima){
            listaUsuarios.push(usuario[i].nombre)
        }
    }
    return listaUsuarios
}
console.log("Usuarios que cumplen la edad: " + filtrarUsuarios(usuarios,edadMinima));



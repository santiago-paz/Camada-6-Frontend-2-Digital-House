let opcionUsuario = ingresarUsuario();
let opcionMaquina = obtenerNumeroAlAzar()

let resultadoUsuario = "No hay resultado";

if (opcionUsuario === 1) {
    if (opcionMaquina === 1) {
        resultadoUsuario = "Empate"
    }
    if (opcionMaquina === 2) {
        resultadoUsuario = "Perdiste"
    }
    if (opcionMaquina === 3) {
        resultadoUsuario = "Ganaste!"
    }
}

if (opcionUsuario === 2) {
    if (opcionMaquina === 1) {
        resultadoUsuario = "Ganaste!"
    }
    if (opcionMaquina === 2) {
        resultadoUsuario = "Empate"
    }
    if (opcionMaquina === 3) {
        resultadoUsuario = "Perdiste!"
    }
}

if (opcionUsuario === 3) {
    if (opcionMaquina === 1) {
        resultadoUsuario = "Perdiste!"
    }
    if (opcionMaquina === 2) {
        resultadoUsuario = "Ganaste!"
    }
    if (opcionMaquina === 3) {
        resultadoUsuario = "Empate"
    }
}

console.log("La maquina eligió :" + opcionMaquina);
console.log("Vos elegiste :" + opcionUsuario);
console.log(resultadoUsuario)

alert(resultadoUsuario)

function obtenerNumeroAlAzar() {
    return parseInt(Math.random() * 3 + 1);
}

function ingresarUsuario() {
    return parseInt(prompt("Ingrese una opción: 1 - Piedra, 2 - Papel, 3 - Tijera"));
}

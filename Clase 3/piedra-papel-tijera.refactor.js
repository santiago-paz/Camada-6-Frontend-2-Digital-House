let opcionUsuario = ingresarUsuario()
let opcionMaquina = obtenerNumeroAlAzar()
let resultadoUsuario = "No hay resultado";

const piedra = 1;
const papel = 2;
const tijera = 3;

/* Operador ternario: */
resultadoUsuario = (opcionMaquina === opcionUsuario) ? "Empate" : resultadoUsuario

alert("La computadora eligió " + opcionMaquina)

if (opcionUsuario === piedra) {
    if (opcionMaquina === papel) {
        resultadoUsuario = "Perdiste"
    }
    if (opcionMaquina === tijera) {
        resultadoUsuario = "Ganaste!"
    }
}

if (opcionUsuario === papel) {
    if (opcionMaquina === piedra) {
        resultadoUsuario = "Ganaste!"
    }
    if (opcionMaquina === tijera) {
        resultadoUsuario = "Perdiste!"
    }
}

if (opcionUsuario === tijera) {
    if (opcionMaquina === piedra) {
        resultadoUsuario = "Perdiste!"
    }
    if (opcionMaquina === papel) {
        resultadoUsuario = "Ganaste!"
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
    let eleccionUsuario;
    let esInvalido;

    do {
        eleccionUsuario = parseInt(prompt("Ingrese una opción: 1 - Piedra, 2 - Papel, 3 - Tijera"))
        esInvalido = isNaN(eleccionUsuario) ||
            eleccionUsuario < 1 ||
            eleccionUsuario > 3;

        if (esInvalido) {
            alert("El valor ingresado no es válido")
        }
    } while (esInvalido)

    return eleccionUsuario;
}

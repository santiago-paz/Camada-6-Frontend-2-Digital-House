const logoDVD = document.getElementById('dvd_logo');
let x = 0;
let y = 0;
let direccionX = "derecha"
let direccionY = "abajo"

setInterval(() => {
    if (direccionX === "derecha" && direccionY === "abajo") {
        logoDVD.style.left = `${x++}px`;
        logoDVD.style.top = `${y++}px`;
    }

    if (direccionX === "derecha" && direccionY === "arriba") {
        logoDVD.style.left = `${x++}px`;
        logoDVD.style.top = `${y--}px`;
    }

    if (direccionX === "izquierda" && direccionY === "abajo") {
        logoDVD.style.left = `${x--}px`;
        logoDVD.style.top = `${y++}px`;
    }

    if (direccionX === "izquierda" && direccionY === "arriba") {
        logoDVD.style.left = `${x--}px`;
        logoDVD.style.top = `${y--}px`;
    }

    if (x === 0) {
        direccionX = "derecha"
    }

    if (y === 0) {
        direccionY = "abajo"
    }

    if (x > window.outerWidth - logoDVD.clientWidth) {
        direccionX = "izquierda"
    }

    if (y > window.outerHeight - logoDVD.clientHeight) {
        direccionY = "arriba"
    }
}, 10);
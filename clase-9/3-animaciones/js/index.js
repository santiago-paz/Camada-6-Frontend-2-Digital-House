const logoDVD = document.getElementById('dvd_logo');
let x = 0, y = 0;
let direccionX = "derecha"
let direccionY = "abajo"

setInterval(() => {
    if (direccionX === "derecha") {
        logoDVD.style.left = `${x++}px`;

        if (direccionY === "abajo") {
            logoDVD.style.top = `${y++}px`;
        }

        if (direccionY === "arriba") {
            logoDVD.style.top = `${y--}px`;
        }
    }

    if (direccionX === "izquierda") {
        logoDVD.style.left = `${x--}px`;

        if (direccionY === "abajo") {
            logoDVD.style.top = `${y++}px`;
        }

        if (direccionY === "arriba") {
            logoDVD.style.top = `${y--}px`;
        }
    }

    if (x < 0) direccionX = "derecha"
    if (y < 0) direccionY = "abajo"

    if (x > window.innerWidth - logoDVD.clientWidth) {
        direccionX = "izquierda"
    }

    if (y > window.innerHeight - logoDVD.clientHeight) {
        direccionY = "arriba"
    }
}, 1);
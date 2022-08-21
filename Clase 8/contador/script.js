const elementoContador = document.getElementById('valor_contador');
let i = parseInt(elementoContador.innerText);

function sumarContador() {
    elementoContador.innerText = i++
}

function restarContador() {
    elementoContador.innerText = i--
}

/* const boton = document.getElementById('boton_sumar')
boton.addEventListener('click', () => {
    console.log('Click en +');
}) */

/* const botonDinamico = document.createElement('button');
botonDinamico.onclick = () => {
    console.log('se apretoe l boton dinamico');
}
document.appendChild(botonDinamico) */
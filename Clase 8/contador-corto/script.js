const elementoContador = document.getElementById('valor_contador');

function contador(indice) {
    elementoContador.innerText = parseInt(elementoContador.innerText) += indice
}

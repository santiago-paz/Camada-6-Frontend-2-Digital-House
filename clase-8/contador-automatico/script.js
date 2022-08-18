const elementoContador = document.getElementById('valor_contador');
let i = 0;
let contar;

setTimeout(() => {
    console.log('Hola!');
}, 3000) 


function iniciarContador() {
    contar = setInterval(() => {
        i++;
        elementoContador.innerText = i;
    }, 1);
}

function pararContador() {
    clearInterval(contar)
}
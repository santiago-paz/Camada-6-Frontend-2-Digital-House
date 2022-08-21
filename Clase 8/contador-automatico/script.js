const elementoContador = document.getElementById('valor_contador');
let i = 0;
let contar;

/* La función del primer parametro de setTimeOut se va a ejecutar una sola vez: */
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
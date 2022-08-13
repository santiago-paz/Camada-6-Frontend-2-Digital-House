const parrafo = document.createElement('p')
parrafo.classList.add('ingresado-dinamicamente');
parrafo.innerText = "Este es un parrafo ingresado antes del inicio del contenedor."
document.querySelector('.contenedor').insertAdjacentElement('beforebegin', parrafo)

const parrafo2 = document.createElement('p')
parrafo2.classList.add('ingresado-dinamicamente');
parrafo2.innerText = "Este es un parrafo ingresado después del inicio del contenedor."
document.querySelector('.contenedor').insertAdjacentElement('afterbegin', parrafo2)

const parrafo3 = document.createElement('p')
parrafo3.classList.add('ingresado-dinamicamente');
parrafo3.innerText = "Este es un parrafo ingresado antes del final del contenedor."
document.querySelector('.contenedor').insertAdjacentElement('beforeend', parrafo3)

const parrafo4 = document.createElement('p')
parrafo4.classList.add('ingresado-dinamicamente');
parrafo4.innerText = "Este es un parrafo ingresado después del final del contenedor."
document.querySelector('.contenedor').insertAdjacentElement('afterend', parrafo4);

const parrafo5 = document.createElement('p')
parrafo5.classList.add('ingresado-dinamicamente');
parrafo5.innerText = "Este es un parrafo ingresado en el 'medio' del contenedor."
document.querySelector('.contenedor h2').insertAdjacentElement('beforebegin', parrafo5);

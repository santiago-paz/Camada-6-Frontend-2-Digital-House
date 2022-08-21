/* let imagenArbol = document.createElement('img')

imagenArbol.classList.add('prueba');
imagenArbol.src = "arbol.jpg"

document.querySelector('.contenedor').insertAdjacentElement('afterend', imagenArbol)

imagenArbol.removeAttribute('src')
*/

const contenedor = document.getElementsByClassName('contenedor')
console.log(contenedor);

contenedor[0].remove()
/* const aplicarTemaOscuro = window.confirm("Desea aplicar el tema oscuro?")

if (aplicarTemaOscuro) {
  document.querySelector('body').classList.add('dark')
}

  imagen con src="./imagenes/tiger.jpg"
  El tigre 
  El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del
  género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África
  subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una
  pequeña zona del noroeste de India
 */

const boton = document.createElement('button');
const input = document.createElement('input');
boton.innerText = "Un botón agregado desde JavaScript"

const parrafo = document.createElement('p');
parrafo.innerText = "El tigre (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India"

const subtitulo = document.createElement('h2');
subtitulo.innerText = "El tigre"

const imagen = document.createElement('img');
imagen.src = "./imagenes/tiger.jpg"

document.querySelector('.contenedor .item').appendChild(imagen);
document.querySelector('.contenedor .item').appendChild(subtitulo);
document.querySelector('.contenedor .item').appendChild(parrafo);

function alternarTema() {
  document.querySelector('body').classList.toggle('dark');
}
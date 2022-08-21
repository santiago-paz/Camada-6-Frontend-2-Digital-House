const animal = {
  titulo: 'El tigre',
  parrafo: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
  imgSrc: './imagenes/tiger.jpg'
}

const div = document.createElement('div');

const h2 = document.createElement('h2')
h2.innerText = animal.titulo

const p = document.createElement('p')
p.innerText = animal.parrafo;

const img = document.createElement('img')
img.src = animal.imgSrc;

div.appendChild(h2)
div.appendChild(p)
div.appendChild(img)

document.querySelector('.contenedor').appendChild(div)


const animales = [
  {
    titulo: 'El tigre',
    parrafo: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    imgSrc: './imagenes/tiger.jpg'
  },
  {
    titulo: 'El tigre',
    parrafo: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    imgSrc: './imagenes/tiger.jpg'
  },
  {
    titulo: 'El tigre',
    parrafo: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    imgSrc: './imagenes/tiger.jpg'
  },
]

/* Agregar animales! */
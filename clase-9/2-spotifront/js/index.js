const albumes = [
    {
        id: 'abc1',
        nombre: 'Blood, Sugar, Magic',
        imagenURL: 'https://upload.wikimedia.org/wikipedia/en/5/5e/RHCP-BSSM.jpg',
        like: false
    },
    {
        id: 'abc2',
        nombre: 'Pulse',
        imagenURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pink_Floyd_-_Pulse.png/220px-Pink_Floyd_-_Pulse.png',
        like: false
    },
    {
        id: 'abc3',
        nombre: 'The Wall',
        imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Wall_Cover.svg/1200px-The_Wall_Cover.svg.png',
        like: false
    },
    {
        id: 'abc4',
        nombre: 'Kill Em All',
        imagenURL: 'https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw6503eaa3/images/releases/20150807_213844_7549_752889.jpeg',
        like: false
    },
    {
        id: 'abc5',
        nombre: 'Kid A',
        imagenURL: 'https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/09/kid-a-58da4e6d53cc6.jpg',
        like: false
    },
]

const nombreUsuario = document.getElementById('nombreUsuario');
function obtenerNombre() {
    const nombre = prompt('Ingrese su nombre');
    nombreUsuario.innerText = nombre;
}
obtenerNombre();

const covers = document.querySelector('.covers')

function renderizarAlbumes() {
    covers.innerHTML = '';

    albumes.forEach(album => {
        covers.innerHTML += `
            <li>
                <img src="${album.imagenURL}" alt="${album.nombre}">
                <p>${album.nombre}</p>
                <i onclick="marcarFavorito('${album.id}')" class="fa fa-heart ${album.like ? 'favorito': ''}"></i>
            </li>
        `
    })
}
renderizarAlbumes()

function marcarFavorito(id) {
    console.log(id);
    albumes.forEach(album => {
        if (album.id === id) {
            album.like = !album.like
        }
    })
    renderizarAlbumes()
}

/* Tarea!
    - Agregar la cantidad de albumes al parrafo de totales.
    - Agregar la cantidad de albumes favoritos al parrafo de favoritos.
*/

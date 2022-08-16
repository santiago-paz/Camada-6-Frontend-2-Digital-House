/* 

https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1200px-Eiche_bei_Graditz.jpg 

https://www.elagoradiario.com/wp-content/uploads/2021/06/dia-mundial-del-arbol-1140x600.png

https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/WhatsTree.png

*/

const imagenes = document.querySelectorAll('.tarjeta img');
const urlImagenes = [];

/* for (let index = 0; index < imagenes.length; index++) {
    const url = prompt('Ingrese la URL para la imagen número ' + (index + 1));
    urlImagenes.push(url);
} 

for (let index = 0; index < imagenes.length; index++) {
    const imagen = imagenes[index];
    imagen.setAttribute('src', urlImagenes[index]);
} */

imagenes.forEach((imagen, index) => {
    const url = prompt('Ingrese la URL para la imagen número ' + (index + 1));
    urlImagenes.push(url);
});

imagenes.forEach((imagen, index) => {
    imagen.setAttribute('src', urlImagenes[index])
})



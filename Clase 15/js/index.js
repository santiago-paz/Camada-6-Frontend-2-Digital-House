/*
REQUERIMIENTOS PARA LA APP

- Utilizar el formulario para captar el texto ingresado

- Implementar el evento "submit", utilizarlo para guardar el comentario en un array

- Cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta <p>

- Guardar constantemente la informacion en el localStorage, si se recarga la pagina deberian mantenerse los comentarios

- nos guardamos referncia de los nodos importantes
*/

const formulario = document.forms[0];
const campoComentario = document.getElementById("campo_comentario");
let listaComentarios = [];

const localStorageComentarios = JSON.parse(
  localStorage.getItem("localStorageComentarios")
  );
if (localStorageComentarios) {
  listaComentarios = localStorageComentarios;
  for (const comentario of listaComentarios) {
    const p = document.createElement("p");
    p.innerText = comentario;
    document.getElementById("seccion_comentarios").appendChild(p);
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const valorCampo = campoComentario.value;
  listaComentarios.push(valorCampo);

  campoComentario.value = "";

  const p = document.createElement("p");
  p.innerText = valorCampo;
  document.getElementById("seccion_comentarios").appendChild(p);

  guardarAlLocalStorage(listaComentarios);
});

function guardarAlLocalStorage(listaComentarios) {
  window.localStorage.setItem(
    "localStorageComentarios",
    JSON.stringify(listaComentarios)
  );
}

window.addEventListener("storage", (e) => {
  listaComentarios = JSON.parse(
    localStorage.getItem("localStorageComentarios")
  );
  const p = document.createElement("p");
  p.innerText = listaComentarios[listaComentarios.length - 1];
  document.getElementById("seccion_comentarios").appendChild(p);
});

const botones = document.querySelectorAll("button");

botones.forEach((boton) => boton.addEventListener("click", enviarMensaje));

function enviarMensaje(event) {
  const boton = event.target;

  console.log(boton.dataset.titulo);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: boton.dataset.titulo,
      body: 'bar',
      userId: boton.dataset.idUsuario,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

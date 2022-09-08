const promisePerrito = fetch("https://dog.ceo/api/breeds/image/random").then(
  function (respuesta) {
    return respuesta.json();
  }
);

/* En este punto de nuestro programa,
  podemos hacer uso de la respuesta del servidor */
promisePerrito.then(function (respuesta) {

  console.log(respuesta);

  const imageURL = respuesta.message;
  document.getElementById("imagen_perrito").setAttribute("src", imageURL);
});

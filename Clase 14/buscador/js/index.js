const form = document.getElementById("form_busqueda");
let historialBusquedas = JSON.parse(localStorage.getItem("historial"));

if (historialBusquedas) {
  /* renderizar el historial de busquedas  */
  historialBusquedas.forEach((busqueda) => {
    const parrafo = document.createElement("p");
    parrafo.innerText = busqueda;
    document.getElementById("busquedas-realizadas").appendChild(parrafo);
  });
} else {
  historialBusquedas = [];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const busquedaActual = formData.get("busqueda").trim();

  historialBusquedas.push(busquedaActual);
  localStorage.setItem("historial", JSON.stringify(historialBusquedas));

  realizarBusqueda(busquedaActual);
});

function realizarBusqueda(termino) {
  location.assign(`http://www.google.com/search?q=${termino}`);
}

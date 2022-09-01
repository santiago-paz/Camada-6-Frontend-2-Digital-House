cargarDatosStorage();
agregarStorageListener();

function agregarStorageListener() {
  window.addEventListener("storage", (e) => {
    const datos = JSON.parse(e.newValue);

    document.getElementById("nombre").innerText = datos.nombre;
    document.body.style.backgroundColor = datos.color_fondo;
  });
}

function cargarDatosStorage() {
  const datosStorage = JSON.parse(localStorage.getItem("datos"));

  if (datosStorage) {
    const storageNombre = datosStorage.nombre;
    const storageFondo = datosStorage.color_fondo;

    document.getElementById("nombre").innerText = storageNombre;
    document.body.style.backgroundColor = storageFondo;
  }
}

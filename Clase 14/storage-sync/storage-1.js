cargarDatosStorage();
agregarListenerForm();

function agregarListenerForm() {
  const form = document.getElementById("form_datos");

  form.addEventListener("change", () => {
    const formData = new FormData(form),
      valorCampoNombre = formData.get("nombre"),
      valorCampoColorFondo = formData.get("color_fondo");

    localStorage.setItem(
      "datos",
      JSON.stringify({
        nombre: valorCampoNombre,
        color_fondo: valorCampoColorFondo,
      })
    );

    cargarDatosStorage();
  });
}

function cargarDatosStorage() {
  const datosStorage = JSON.parse(localStorage.getItem("datos"));

  if (datosStorage) {
    const storageNombre = datosStorage.nombre;

    document.getElementById("titulo_nombre").innerText = storageNombre;
    document.getElementById("nombre").value = storageNombre;

    const storageFondo = datosStorage.color_fondo;
    document.body.style.backgroundColor = storageFondo;
    document.getElementById("color_fondo").value = storageFondo;
  }
}

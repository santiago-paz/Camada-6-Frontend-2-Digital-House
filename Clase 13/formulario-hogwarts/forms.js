const ingresante = {
  nombre: "",
  correo: "",
  contrasenia: "",
  telefono: "",
  hobbies: [],
  paisNacimiento: "",
};

const form = document.getElementById("form_hogwarts");
const form2 = document.getElementById("otroform");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formInscripcion = new FormData(form);

  ingresante.nombre = formInscripcion.get("nombre");
  ingresante.correo = formInscripcion.get("correo");
  ingresante.contrasenia = formInscripcion.get("password");
  ingresante.paisNacimiento = formInscripcion.get("nacionalidad");
  ingresante.hobbies = formInscripcion.getAll("hobbies");

  console.table(ingresante);
});

document.getElementById("nombre").addEventListener("blur", (e) => {
  const valor = e.target.value;
  if (valor.split(" ").length < 2) {
    alert("error");
  }
});

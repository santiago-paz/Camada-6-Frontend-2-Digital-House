const cancelarEnvio = true;

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  if (cancelarEnvio) {
    console.log("lo manejo yo!");
    event.preventDefault();
  }
});

const input = document.querySelector('input[name="nombre"]');
input.addEventListener("invalid", (event) => {
  event.preventDefault();
  if (
    event.target.validity.valueMissing &&
    !document.querySelector('input[name="nombre"]+span.error')
  ) {
    let errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "Por favor, ingrese un valor válido";
    input.insertAdjacentElement("afterend", errorElement);
  }
});

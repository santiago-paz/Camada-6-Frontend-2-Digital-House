const frasePeticion = "Pedro, por favor responde esta pregunta importante";
let respuesta = "",
  truco = false,
  indexFrase = 0;

document.getElementById("peticion").addEventListener("keydown", (e) => {
  if (e.key === ".") {
    truco = !truco;
    if (!truco) {
      e.preventDefault();
      e.target.value = frasePeticion.substring(0, indexFrase + 1);
    }
  }
  if (e.key === "Tab") {
    truco = false;
  }
  if (truco) {
    e.preventDefault();
    e.target.value = frasePeticion.substring(0, ++indexFrase);
    respuesta += e.key !== "." ? e.key : "";
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  const p = document.createElement("p");
  p.innerText = `Pedro está pensando la respuesta...`;
  document.getElementById("respuesta").append(p);

  setTimeout(() => {
    p.innerText = `Pedro responde... ${respuesta}`;
  }, 2000);

  e.preventDefault();
});

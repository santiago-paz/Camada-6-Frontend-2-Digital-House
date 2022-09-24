/* Loading spinner button */

const button = document.querySelector("#ingresar");
button.addEventListener("click", (event) => {
  const target = event.target;
  target.querySelector("img").classList.remove("oculto");
  target.querySelector("span").classList.add("oculto");
  target.setAttribute("disabled", "true");

  setTimeout(() => {
    location.assign("https://www.google.com");
  }, 2000);
});

/* Barra de carga */
const barra = document.querySelector("#barra");
const relleno = document.querySelector("#relleno");
let porcentaje = 20;
relleno.style.width = `${porcentaje}%`;
const intervalo = setInterval(() => {
  if (porcentaje < 100) {
    porcentaje++;
    relleno.style.width = `${porcentaje}%`;
  } else {
    /* Detiene la ejecución */
    clearInterval(intervalo);
  }
}, 100);

/* Skeleton */

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
const skeleton = document.querySelector("#skeleton");
const contenedorPokemon = document.querySelector("#pokemon");

fetch(url)
  .then((response) => response.json())
  .then((infoPokemon) => {
    skeleton.remove();
    contenedorPokemon.innerHTML = `
    <article id="skeleton">
      <h2>${infoPokemon.name}</h2>
      <img src="${infoPokemon.sprites.front_default}" alt="pokemon">
      <h6>${infoPokemon.types[0].type.name}</h6>
    </article> 
    `;
  });

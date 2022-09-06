function saludar(paramNombre) {
  return `Hola, mi nombre es ${paramNombre}`;
}
const nombre = "Ana";

setTimeout(function () {
  const nombre2 = "Santiago";
  const saludo2 = saludar(nombre2);
  console.log(saludo2);
}, 3000);

const saludo = saludar(nombre);
console.log(saludo);

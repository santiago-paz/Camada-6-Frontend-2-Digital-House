const animales = ["tigre", "leon", "perro", "gato"];
/* convertir a animales = ["animal tigre", "animal leon", "animal perro", "animal gato"]; */

/* animales.forEach(function (animal, indice) {
  console.log("pasó por este item" + indice);
  console.log(animal);
}); */

/* const funcionFlecha = (animal, indice) => {
  console.log("pasó por este item" + indice);
  console.log(animal);
}; */

animales.forEach((animal, indice) => {
  console.log("pasó por este item" + indice);
  console.log(animal);
});

for (let indice = 0; indice < array.length; indice++) {
    const animal = array[indice];
    console.log("pasó por este item" + indice);
    console.log(animal);
}

const animalesModificados = animales.map((animal) => {
  return "animal " + animal;
});

console.log(animales);
console.log(animalesModificados);

const animalesModificadosConFor = [];

for (let index = 0; index < animales.length; index++) {
  const animal = animales[index];
  animalesModificadosConFor.push("animal " + animal);
}

console.log(animalesModificadosConFor);
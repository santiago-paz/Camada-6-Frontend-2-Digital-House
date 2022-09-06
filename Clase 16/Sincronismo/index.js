function procesoBusqueda(cantidadRegistros) {
  for (let index = 0; index < 3; index++) {
    const respuesta = [];
    for (let index = 1; index < cantidadRegistros; index++) {
      const registro =
        ((index * 999999999) / 0.0000001) * Math.sqrt(10000) * Math.random();
      respuesta.push(registro);
    }
  }
  console.log("ejecución finalizada");
}

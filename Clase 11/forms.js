function testing() {
  document.getElementsByName("nombre").forEach((element) => {
    console.log(element.value);
  });
}


const array = [1, 2, 4, 8]
let suma = array[0];

for (let index = 1; index < array.length; index++) {
    
    const element = array[index];
    suma = suma + element;
    console.log(suma);
}

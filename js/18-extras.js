/* Spread operator  - Desestructuring*/

//Spread operator
const persona = {
  nombre: "Andres",
  apellido: "Perlo",
  edad: 30,
  argentino: true,
  domicilio: {
    localidad: "Las talitas",
    provincia: "Tucuman",
  },
  colores: ["rojo", "azul", "verde"],
  saludar: function () {
    console.log("Hola");
  },
};

const nuevaPersona = {
  ...persona,
  rol: "Administrador",
  celular: "381 123 4567",
};

//console.log(nuevaPersona);

//Desestructuring - Desestructuramiento de un objeto

/* console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.argentino); */

/* const { argentino, apellido, edad, nombre } = persona;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(argentino); */

//Desestructuring - Desestructuramiento de un array

/* const numeros = [1, 2, 3];

const [tres, uno, dos] = numeros;

console.log(uno);
console.log(dos);
console.log(tres);
 */

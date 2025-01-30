/* Objetos */
/* 
P - Programacion
O - orientada
O - objetos
*/

const numeros = [1, 5, 20, 55, 12, 31, 33, 36, 5, 40, 50];
//console.log(numeros[0]);

const persona = {
  //Propiedades
  //Clave : Valor
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

/* Obtener un valor */
/* console.log(persona.nombre);
console.log(persona["apellido"]); */

// Agregar o modificar  una propiedad
persona.sexo = "masculino";
persona.edad = 33;

// Elimina una propiedad
delete persona.argentino;
//console.log(persona);

//Recorrer un objeto - for in

/* for (let clave in persona) {
  console.log(persona[clave]);
} */

//console.log(Object.keys(persona));
/* const claves = Object.keys(persona);

for (let index = 0; index < claves.length; index++) {
  const clave = claves[index];
  console.log(persona[clave]);
} */

/* Object.keys(persona).forEach((clave) => {
  console.log(typeof clave);
  if (clave === "saludar") {
    const saludar = persona[clave];
    console.log(saludar());
  }
});
 */

const auto = {
  marca: "Fiat",
  modelo: "Cronos",
  anio: 2020,
  encendido: false,
  encenderApagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("auto apagado");
    } else {
      this.encendido = true;
      console.log("auto encendido");
    }
  },
  mostrarInfo: function () {
    console.log(this.marca);
    console.log(this.modelo);
    console.log(this.anio);
  },
};

/* const auto2 = {
  marca: "Fiat",
  modelo: "Cronos",
  anio: 2020,
  encender: function () {
    console.log("auto encendido");
  },
  apagar: function () {
    console.log("auto apagado");
  },
  mostrarInfo: () => {
    console.log(this.marca);
    console.log(this.modelo);
    console.log(this.anio);
  },
};
 */

//----------------------------------------------------
//id - identificador
//uid - u - unico
const alumnos = [
  /* {
    id: 1,
    nombre: "Xavier",
    apellido: "Pistan",
    domicilio: "san miguel de tucuman",
  },
  {
    id: 2,
    nombre: "Francisco",
    apellido: "Diaz",
    domicilio: "Yerba buena",
  }, */
];

/* const nuevoId = alumnos.length;
console.log(nuevoId + 1); */
/* const nuevoId = crypto.randomUUID();
console.log(nuevoId); */
/* console.log(alumnos);
console.log(alumnos.length); */
//console.log(alumnos.length);
//const nuevoId = alumnos[alumnos.length - 1]?.id + 1 || 1;
/* const nuevoId = alumnos.length ? alumnos[alumnos.length - 1]?.id + 1 : 1; */
//console.log(nuevoId);

/* 
C - create - crear
R - read - leer - obtengo
U - update - actualizar
D - delete - eliminar

A - Alta
B - baja
M - modificacion

*/

//Tarea e investigacion
//Object.values - Object.entries - investigar

/* 
📝 Ejercicio: CRUD de Productos
🎯 Objetivo

📌 Requisitos:
Crear un array de productos
Implementar funciones para:

Agregar un producto (con ID único, nombre, precio y categoría).

Mostrar todos los productos guardados. // recorrer el array y mostrar con document.write cada elemento.

Buscar un producto por su ID.

Actualizar un producto por su ID.

Eliminar un producto por su ID.
*/

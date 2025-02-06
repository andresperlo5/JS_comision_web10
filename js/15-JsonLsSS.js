/* const persona = {
  nombre: "Andres",
  pais: undefined,
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
}; */

/* const personaString = JSON.stringify(persona);
localStorage.setItem("persona", personaString); */
//localStorage.setItem("persona", JSON.stringify(persona));

/* const alumnos = [
  {
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
  },
];
 */
/* const alumnosString = JSON.stringify(alumnos);
localStorage.setItem("alumnos", alumnosString); */
//localStorage.setItem("alumnos", JSON.stringify(alumnos));

//obtener - getItem
/* const personaLs = localStorage.getItem("persona");
const personaParse = JSON.parse(personaLs);
console.log(personaParse); */
//const personaLs = JSON.parse(localStorage.getItem("persona"));
//console.log(personaLs);

/* const alumnosLs = localStorage.getItem("alumnos");
const alumnosParse = JSON.parse(alumnosLs);
console.log(alumnosParse); */
//const alumnosLs = JSON.parse(localStorage.getItem("alumnos"));
//console.log(alumnosLs);

/* 
----
investigar por que JS a los arrays dice que el tipo de dato es Object
----


📝 Ejercicio Avanzado: CRUD de Productos con LocalStorage y Filtros
🎯 Objetivo:
Crear una aplicación en JavaScript que permita gestionar productos utilizando LocalStorage, incorporando validaciones y filtrado de productos.

📌 Requisitos:
Manejo de LocalStorage:

Crear un array de productos en formato JSON y almacenarlo en LocalStorage.
Funciones CRUD:

Agregar un producto (con ID único, nombre, precio, categoría y stock).
Mostrar todos los productos guardados en formato de tabla en la consola.
Buscar un producto por su ID y mostrar sus detalles.
Actualizar un producto por su ID (permitiendo modificar nombre, precio, categoría o stock).
Eliminar un producto por su ID.

Validaciones:

No se pueden agregar productos con el mismo ID.
El precio y stock deben ser valores numéricos positivos.
El nombre debe tener al menos 3 caracteres.

Filtrado de Productos:

Permitir filtrar productos por nombre.
Permitir filtrar productos por categoría.
Permitir filtrar productos por rango de precio (ejemplo: mostrar productos entre $100 y $500).
Persistencia:

Cargar los productos almacenados en LocalStorage al iniciar la aplicación.
Si no hay productos, inicializar con un array vacío.
*/

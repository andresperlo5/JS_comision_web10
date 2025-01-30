/* Array - Arreglo - Organizar */
/* Array - posiciones - 0 - Elementos */
//Metodo = Funcion
// 0          1         2
//const meses = ["enero"];
//console.log(meses);

/* Agregar un nuevo elemento */
//meses.push("abril"); //metodo // agrega un elemento al final
//meses.unshift() // agrega un elemento al principio
//meses.splice(0, 0, 'abril'); // agrega un elemento donde le indiquemos
//console.log(meses.length); //atributo

/* Eliminar un elemento */
//meses.pop(); // elimina el ultimo elemento
//meses.shift(); // elimina el primer elemento
//meses.splice(0, 1); // elimina un elemento donde le indiquemos
//console.log(meses);

/* const indice = meses.indexOf("enero");
console.log(indice);

console.log(meses[indice]); */

/* includes - true / false*/
//console.log(meses.includes("marzo"));

//Sort - Ordena alfabeticamente

//const numeros = [1, 5, 20, 55, 12, 31, 33, 36, 40, 50];

//console.log(meses.sort());
//console.log(numeros.sort());

//concat - concatena 2 o mas arrays
/* const mesesNumeros = numeros.concat(meses);
console.log(mesesNumeros); */

//console.log(meses[meses.length - 1]);
//console.log(numeros[numeros.length - 1]);
//meses[6]

/* for (let i = 0; i <= numeros.length; i++) {
  const numero = numeros[i];
  console.log(numero);
} */

/* 
Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

const meses = [
  "enero",
  "febrero",
  "marzo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

/* document.write(`
    <h3>Lista de Meses</h3>
    `);

for (let i = 0; i < meses.length; i++) {
  let mes = meses[i];
  document.write(`
    <li>${mes}</li>
    `);
}
 */

const numerosOrdenador = (array) => {
  return array.sort((a, b) => a - b);
};

const numeros = [1, 5, 20, 55, 12, 31, 33, 36, 5, 40, 50];
console.log(numerosOrdenador(numeros));

/* Condicionales */
/* 
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

/* Condicion Simple */

/* let edad = 16;

if (edad >= 18) {
  alert("Podes conducir");
} */

/* let edad = 15;

if (edad >= 18) {
  alert("Podes conducir");
} else {
  alert("No puedes conducir");
} */

// && - todas las condiciones deben ser verdaderas
// || - una sola de todas las condiciones debe ser verdadera

//Escribir un programa que solicite la edad
//let edad = prompt("Ingrese su edad");

//si es mayor de 18 años mostrar un mensaje que ya puede conducir. Si la edad ingresada no es un número válido indicarlo en un mensaje.

/* if (edad > 0 || Number(edad)) {
  if (edad >= 18 && edad <= 75) {
    console.log("Ya puedes conducir");
  } else {
    console.log("No puedes conducir");
  }
} else {
  console.log("Edad incorrecta");
} */

/* let edad = Number(prompt("Ingrese su edad"));

if (edad > 0 || !isNaN(edad)) {
  if (edad >= 18 && edad <= 75) {
    console.log("Ya puedes conducir");
  } else if (edad === 16) {
    console.log("Puedes manejar con permiso de tus padres");
  } else {
    console.log("No puedes conducir");
  }
} else {
  console.log("Edad incorrecta");
} */

/* 0 - false - null - undefined - "" */

/* let nombre = 0;
let apellido = "perlo"; */

/* if (nombre && apellido) {
  console.log("formulario completo");
} else {
  console.log("Campo nombre vacio");
} */

/* if (!nombre) {
  console.log("Campo nombre vacio");
} */

/* Ternario */

//let nombre = "";
/* ? - el resultado del IF
   : - el resultado del else
*/
/* nombre ? console.log("tiene algo") : console.log("no tiene nada");

nombre && console.log("tiene algo");

let fecha = new Date();
let minutos =
  fecha.getMinutes() >= 9 ? `0${fecha.getMinutes()}` : fecha.getMinutes(); */

/* Switch */
/* 
 Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

//let nota = 11;

/* switch (nota) {
  case 0:
    console.log("Muy deficiente");
    break;
  case 1:
    console.log("Muy deficiente");
    break;
  case 2:
    console.log("Muy deficiente");
    break;
  case 3:
    console.log("Insuficiente");
    break;
  case 4:
    console.log("Insuficiente");
    break;
  case 5:
    console.log("Suficiente");
    break;
  case 6:
    console.log("Suficiente");
    break;
  case 7:
    console.log("Bien");
    break;
  case 8:
    console.log("Notable");
    break;
  case 9:
    console.log("Notable");
    break;
  case 10:
    console.log("Sobresaliente");
    break;

  default:
    console.log("Nota incorrecta");
    break;
} */

/* let nota = 3;

switch (true) {
  case nota >= 0 && nota <= 2:
    console.log("Muy deficiente");
    break;
  case nota === 3 || nota === 4:
    console.log("Insuficiente");
    break;
  case nota === 5 || nota === 6:
    console.log("Suficiente");
    break;
  case nota === 7:
    console.log("Bien");
    break;
  case nota === 8 || nota === 9:
    console.log("Notable");
    break;
  case nota === 10:
    console.log("Sobresaliente");
    break;

  default:
    console.log("Nota incorrecta");
    break;
} */

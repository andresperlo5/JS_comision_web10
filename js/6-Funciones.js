/* Funciones */
/* Declarativas - Anonimas - Flechas - IIFE  */
/* Ambiente Global */
/* let nombre = "Andres";
let apellido = "";

if (nombre) {
  // Ambiente local
  console.log(nombre);
  //var nombreUsuario = "Pepe";
  let nombreUsuario = "Pepe";
}

console.log(nombreUsuario);

//console.log(nombreUsuario);
for (let i = 0; i < 5; i++) {
  //Ambiente local
  let nombre = "Pepe";
}

function nombres() {
  //Ambiente local
  apellido = "Perlo";
}
console.log(apellido); */

/* Declarativas - Anonimas - Flechas - IIFE  */
/* Funcion Declarativa */

//saludarPersona - funciones
//saludar_persona - variables

/* function saludar() {
  console.log("hola");
}
 */
//saludar();

/* Funcion Anonima */

/* const frase = function () {
  return "Hola comision web 10";
}; */

//console.log(frase());

/* Funcion Flecha */

/* const sumar = () => {
  let resultado = 1 + 2;
  return resultado;
}; */

//console.log(sumar());

// Funcion IIFE

/* (() => {
  console.log("Funcion IIFE");
})();

(function () {
  console.log("Funcion IIFE funcion anonima");
})(); */

//funcion recursiva y generadora - investigar para la proxima clase

// parametros - argumentos - callbacks
//parametro - variable- info dinamica
//argumento - 30 "Andres" - Estatico

/* 
let numero1 = 10;
let numero2 = 60;

const sumar = (num1 = 0, num2 = 0) => {
  console.log(num1);
  console.log(num2);
  const resultado = num1 + num2;
  //const resultado = numero1 + numero2;
  return resultado;
};

const formulario = (nombre = "", apellido = "") => {
  return `${nombre} ${apellido}`;
};

console.log(sumar(numero1, numero2));
console.log(formulario("Andres", "Perlo", "Las talitas"));
 */

//

/* const numeroAleatorio = () => {
  const numero = Math.round(Math.random() * 100);
  console.log(numero);
  return numero;
};

const numeroUsuario = () => {
  const numero = prompt("Ingrese un numero del 1 al 100");
  return Number(numero);
};

const juego = () => {
  const numeroMaquina = numeroAleatorio();
  const numeroPersona = numeroUsuario();

  if (numeroMaquina === numeroPersona) {
    console.log("Ganaste sos un crack de la vida");
  } else {
    console.log("Eres un perdedor");
  }
}; */

//callbacks

const suma = (a, b) => {
  return a + b;
};

const resultado = (funcion) => {
  console.log(funcion(1, 5));
};

//resultado(suma);
//resultado(() => 5 - 3);

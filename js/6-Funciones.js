/* Funciones */
/* Declarativas - Anonimas - Flechas - IIFE  */
/* Ambiente Global */
let nombre = "Andres";
let apellido = "";

if (nombre) {
  /* Ambiente local */
  console.log(nombre);
  let nombreUsuario = "Pepe";
}

//console.log(nombreUsuario);
for (let i = 0; i < 5; i++) {
  /* Ambiente local */
  let nombre = "Pepe";
}

function nombres() {
  /* Ambiente local */
  apellido = "Perlo";
}
console.log(apellido);

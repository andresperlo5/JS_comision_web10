/* Funcion Constructora */
const usuarios = [];

function Persona(nombre, apellido, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;

  this.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  };
}

//Instanciar
const persona1 = new Persona("Andres", "Perlo", "12345678");

const persona2 = new Persona("Jose", "Gomez", "12345679");

console.log(persona1.saludar());
console.log(persona2.saludar());

console.log(persona1);
console.log(persona2);

/* const registro = () => {
  const nombre = prompt("ingrese su nombre");
  const apellido = prompt("ingrese su apellido");
  const dni = prompt("ingrese su dni");

  const usuario = new Persona(nombre, apellido, dni);
  usuarios.push(usuario);
};

const mostrarUsuarios = () => {
  console.log(usuarios);
}; */

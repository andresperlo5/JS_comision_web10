/* Prototype */
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

console.log(persona1);
console.log(persona2);

Persona.prototype.mostrarInfo = function () {
  console.log(this.apellido);
  console.log(this.nombre);
  console.log(this.dni);
};

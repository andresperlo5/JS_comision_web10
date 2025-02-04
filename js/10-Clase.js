/* Clase */
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  }

  mostrarInfo() {
    console.log(this.nombre);
    console.log(this.apellido);
  }
}

//instacia
const persona1 = new Persona("andres", "perlo");
console.log(persona1);

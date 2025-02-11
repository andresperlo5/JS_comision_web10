/* Promesas */
// Estados: Pendiente, se cumple, o no se cumple

/* const promesa = new Promise((resolve, reject) => {
  //resolve - cuando la promesa se cumple
  //reject - cuando la promesa no se cumple
  const res = false;

  setTimeout(() => {
    if (res) {
      resolve("la promesa se cumple");
    } else {
      reject("la promesa no se cumple");
    }
  }, 2000);
}); */

//then-catch
/* promesa.then((res) => console.log(res)).catch((error) => console.log(error)); */

/* productos
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
 */

//async-await

/* const productos = async () => {
  try {
    const productosApi = await fetch("https://fakestoreapi.com/products");
    const res = await productosApi.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}; */

/* const obtenerPersonajes = async () => {
  try {
    const personajesApi = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const res = await personajesApi.json();
    console.log(res.results);

    res.results.forEach((personaje) => {
      document.write(`<h1>${personaje.name} </h1>`);
      document.write(`<img src="${personaje.image}">`);
    });
  } catch (error) {
    console.log(error);
  }
}; */
/* 
const obtenerPokemon = async () => {
  try {
    const personajesApi = await fetch("https://pokeapi.co/api/v2/pokemon");
    const res = await personajesApi.json();
    console.log(res.results);
    res.results.forEach((pokemon, index) => {
      document.write(`<h1>${pokemon.name} </h1>`);
      document.write(
        `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png">`
      );
    });
  } catch (error) {
    console.log(error);
  }
}; */

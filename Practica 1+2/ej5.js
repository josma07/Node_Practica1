const pokemonBase = { nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 25 };
const ataques = ['Impactrueno', 'Ataque Rápido'];

const pokemonMejorado = {...pokemonBase, nivel:50, shiny:true};
const listaAtaques = [...ataques, "Rayo"];

console.log(pokemonMejorado);
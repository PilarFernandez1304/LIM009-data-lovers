global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
// require('./data.spec.js');

const data = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] }
];

const avgSpawns = 'avg_spawns';
const sortOrderAsc = 'ascendente';
const orderDataAsc1 = [
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] }
];

const name1 = 'az';
const orderDataAsc2 = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] }
];

const name2 = 'za';
const sortOrderDesc = 'descendente';
const orderDataDesc = [
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] }
];

const condition = 'Psychic';
const filterDataType = [
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] }
];

const listTypeData = ['Water', 'Psychic', 'Grass', 'Poison'];

const data2 = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
  { id: 78, num: '078', name: 'Rapidash', img: 'http://www.serebii.net/pokemongo/pokemon/078.png', prev_evolution: [{num: '077', name: 'Ponyta'}]},
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', prev_evolution: [{num: '001', name: 'Bulbasaur'}, {num: '002', name: 'Ivysaur'}]}
];
const typeEvolution1 = 'Evolucion1';
const listEvolution1 = [{ id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'}];
const typeEvolution2 = 'Evolucion2';
const listEvolution2 = [{ id: 78, num: '078', name: 'Rapidash', img: 'http://www.serebii.net/pokemongo/pokemon/078.png', prev_evolution: [{num: '077', name: 'Ponyta'}]}];
const typeEvolution3 = 'Evolucion3';
const listEvolution3 = [
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', prev_evolution: [{num: '001', name: 'Bulbasaur'}, {num: '002', name: 'Ivysaur'}]}
];


const data3 = [ 
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', candy_count: 25, next_evolution: [{num: '002', name: 'Ivysaur'}, {num: '003', name: 'Venusaur'}]},
  { id: 2, num: '002', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png', candy_count: 100, next_evolution: [{num: '003', name: 'Venusaur'}]},
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', }
];
const resultA = [
  { num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', candy_count: 25, next_evolution: [{num: '002', name: 'Ivysaur'}, {num: '003', name: 'Venusaur'}], num_evolutions: 2},
  { num: '002', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png', candy_count: 100, next_evolution: [{num: '003', name: 'Venusaur'}], num_evolutions: 1},
  { num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', candy_count: undefined, next_evolution: undefined, num_evolutions: 0}
];

const poke = 'Ivysaur';
const candyInput = 33;
const resultEvol1 = [
  {
    pokemonFirstName: 'Ivysaur', 
    pokemonFirstImg: 'http://www.serebii.net/pokemongo/pokemon/002.png', 
    pokemonFirstCandy: 100, 
    pokemonFirstCandyInput: 33,
    pokemonEvolutionName: 'Venusaur', 
    pokemonEvolutionImg: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    candyEvolution: 67
  }
];
const poke2 = 'Venusaur';
const resultEvol2 = [
  {
    pokemonFirstName: 'Venusaur', 
    pokemonFirstImg: 'http://www.serebii.net/pokemongo/pokemon/003.png', 
    pokemonFirstCandy: undefined, 
    pokemonFirstCandyInput: 33,
    pokemonEvolutionName: 'Venusaur', 
    pokemonEvolutionImg: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    candyEvolution: 0
  }
];


describe('pokemon', () => {
  test('debería ser un object', () => {
    expect(typeof pokemon).toBe('object');
  });

  describe('Mostrar ciertas propiedades', () => {
    test('mostrarListaPokemon  deberia ser una funcion', () => {
      expect(typeof pokemon.mostrarListaPokemon).toBe('function');
    });
    test('debería retornar un nuevo array para mostrar propiedades especificas y no cambiar el original', () => {
      expect(pokemon.mostrarListaPokemon(data)).not.toEqual(data);
    });
  });

  describe('Ordenar Pokemones', () => {
    test('sortData  deberia ser una funcion', () => {
      expect(typeof pokemon.sortData).toBe('function');
    });
    test('debería retornar un nuevo array ordenado ascendentemente por Apariciones', () => {
      expect(pokemon.sortData(data, avgSpawns, sortOrderAsc)).toEqual(orderDataAsc1);
    });
    test('debería retornar un nuevo array ordenado ascendentemente por nombre', () => {
      expect(pokemon.sortData(data, name1, sortOrderAsc)).toEqual(orderDataAsc2);
    });
    test('debería retornar un nuevo array ordenado descendentemente por nombre', () => {
      expect(pokemon.sortData(data, name2, sortOrderDesc)).toEqual(orderDataDesc);
    });
  });

  describe('Filtrar Pokemones por tipo ', () => {
    test('filterData  deberia ser una funcion', () => {
      expect(typeof pokemon.filterData).toBe('function');
    });
    test('debería retornar un nuevo array filtrado por tipo "Psychic" ', () => {
      expect(pokemon.filterData(data, condition)).toEqual(filterDataType);
    });
  });

  describe(' Obtener todos solo los tipos de pokemones ', () => {
    test(' listType deberia ser una funcion', () => {
      expect(typeof pokemon.listType).toBe('function');
    });
    test('deberia retornar un nuevo arrar con solo los tipos de pokemon', () => {
      expect(pokemon.listType(data)).toEqual(listTypeData);
    });
  });

  describe(' Filtrar por Evolucion', () => {
    test(' nivelEvolution deberia ser una funcion', () => {
      expect(typeof pokemon.nivelEvolution).toBe('function');
    });
    test('deberia retornar un nuevo array con todos los pokemon de primera evolucion', () => {
      expect(pokemon.nivelEvolution(data2, typeEvolution1)).toEqual(listEvolution1);
    });
    test('deberia retornar un nuevo array con todos los pokemon de segunda evolucion', () => {
      expect(pokemon.nivelEvolution(data2, typeEvolution2)).toEqual(listEvolution2);
    });
    test('deberia retornar un nuevo array con todos los pokemon de tercera evolucion', () => {
      expect(pokemon.nivelEvolution(data2, typeEvolution3)).toEqual(listEvolution3);
    });
  });

  describe('Mostrar nuemro de evoluciones ', () => {
    test('dataListPokemon deberia ser una funcion ', ()=>{
      expect(typeof pokemon.dataListPokemon).toBe('function');
    });
    test('deebria retornar un nuevo array con el numero de evolcuiones  ', ()=>{
      expect(pokemon.dataListPokemon(data3)).toEqual(resultA);
    });
  });
  describe('Mostrar calculo de evolucion ', () => {
    test('computeStats deberia ser una funcion ', ()=>{
      expect(typeof pokemon.computeStats).toBe('function');
    });
    test('deebria retornar un nuevo array con el numero de evolcuiones  ', ()=>{
      expect(pokemon.computeStats(data3, poke, candyInput)).toEqual(resultEvol1);
    });
    test('deebria retornar un nuevo array con el numero de evolcuiones  ', ()=>{
      expect(pokemon.computeStats(data3, poke2, candyInput)).toEqual(resultEvol2);
    });
  });
});


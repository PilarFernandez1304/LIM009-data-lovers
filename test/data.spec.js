global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {id: 1,  num: "001", name:'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',avg_spawns : 69,  egg: "2 km" , type:["Grass", "Poison"]  },
  {id: 79, num: "079", name: "Slowpoke", img: "http://www.serebii.net/pokemongo/pokemon/079.png",avg_spawns : 105, egg: "5 km",  type:["Water", "Psychic"] },
  {id: 150, num: "150", name: "Mewtwo", img: "http://www.serebii.net/pokemongo/pokemon/150.png", avg_spawns : 0,   egg: "Not in Eggs", type: ["Psychic"]  }
];

const orderDataAsc =[
  {id: 150, num: "150", name: "Mewtwo", img: "http://www.serebii.net/pokemongo/pokemon/150.png", avg_spawns : 0, egg: "Not in Eggs", type: ["Psychic"]},
  {id: 1,   num: "001", name:'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',avg_spawns : 69,  egg: "2 km" , type:["Grass", "Poison"] },
  {id: 79,  num: "079", name: "Slowpoke", img: "http://www.serebii.net/pokemongo/pokemon/079.png",avg_spawns : 105, egg: "5 km" ,type:["Water", "Psychic"] }  
];
const sortBySpawns = 'avg_spawns';
const sortOrderAsc = 'ascendente';

const orderDataDesc = [
  {id: 79,  num: "079", name: "Slowpoke", img: "http://www.serebii.net/pokemongo/pokemon/079.png",avg_spawns : 105, egg: "5 km",type:["Water", "Psychic"]},
  {id: 150, num: "150", name: "Mewtwo", img: "http://www.serebii.net/pokemongo/pokemon/150.png", avg_spawns : 0, egg: "Not in Eggs", type: ["Psychic"]},
  {id: 1,   num: "001", name:'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',avg_spawns : 69,  egg: "2 km",type:["Grass", "Poison"]} 
];
const sortByName = 'za';
const sortOrderDesc = 'descendente';

const filterDataType = [
  {id: 79, num: "079", name: "Slowpoke", img: "http://www.serebii.net/pokemongo/pokemon/079.png",avg_spawns : 105, egg: "5 km",  type:["Water", "Psychic"] },
  {id: 150, num: "150", name: "Mewtwo", img: "http://www.serebii.net/pokemongo/pokemon/150.png", avg_spawns : 0,   egg: "Not in Eggs", type: ["Psychic"]  }
];
const condition = "Psychic";
const listTypeData = ["Water", "Psychic","Grass", "Poison"]


describe('pokemon', () => {  
  test('debería ser un object', () => {
    expect(typeof pokemon).toBe('object');
  });
  
  describe("Mostrar ciertas propiedades" , ()=>{
    test('mostrarListaPokemon  deberia ser una funcion', () => {
      expect(typeof pokemon.mostrarListaPokemon).toBe('function');
    });
    test('debería retornar un nuevo array para mostrar propiedades especificas y no cambiar el original', () => {
      expect(pokemon.mostrarListaPokemon(data)).not.toEqual(data);
    });
  });


  describe("Ordenar Pokemones" , ()=>{
    test('sortData  deberia ser una funcion', () => {
      expect(typeof pokemon.sortData ).toBe('function');
    });
    test('debería retornar un nuevo array ordenado ascendentemente por Apariciones', () => {
      expect(pokemon.sortData(data,sortBySpawns ,sortOrderAsc)).toEqual(orderDataAsc);
    });
    test('debería retornar un nuevo array ordenado descendentemente por nombre', () => {
      expect(pokemon.sortData(data,sortByName,sortOrderDesc)).toEqual(orderDataDesc);
    });    
  });

  
  describe("Filtrar Pokemones por tipo " , ()=>{
    test('filterData  deberia ser una funcion', () => {
      expect(typeof pokemon.filterData).toBe('function');
    });
    test('debería retornar un nuevo array filtrado por tipo "Psychic" ', () => {
      expect(pokemon.filterData(data,condition)).toEqual(filterDataType);
    });
  });

  describe(" Obtener todos solo los tipos de pokemones " , ()=>{
    test(' listType deberia ser una funcion', () => {
      expect(typeof pokemon.listType).toBe('function');
    });
    test('deberia retornar un nuevo arrar con solo los tipos de pokemon', () => {
      expect(pokemon.listType(data)).toEqual(listTypeData);
    });
  });

  












  














})
global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('pokemon', () => {  
  test('debería ser un object', () => {
    expect(typeof pokemon).toBe('object');
  });
  
  describe("mostrar lista pokemon" , ()=>{
    test('mostrarListaPokemon  deberia ser una funcion', () => {
      expect(typeof pokemon.mostrarListaPokemon).toBe('function');
    });

  });

})
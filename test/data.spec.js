global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');



/*
describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
*/

describe('pokemon', () => {
  
  it('debería ser un object', () => {
    assert.equal(typeof pokemon, 'object');
  });
 /*
  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });*/
})
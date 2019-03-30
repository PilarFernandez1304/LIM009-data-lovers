/* *** MOSTRAR POEKOM ****/
const mostrarListaPokemon = (dataPoke) => {
  const pokedex = dataPoke.map(data => {
    return { num: data.num, img: data.img, name: data.name, avgSpawns: data.avg_spawns };
  });
  return pokedex;
};
/* *** ORDENAR POKEMON ****/
const sortData = (data, sortBy, sortOrder) => {
  let listaOrdenada;
  switch (sortOrder) {
  case 'ascendente':
    if (sortBy === 'avg_spawns') {
      listaOrdenada = data.sort((eleA, eleB) => eleA.avgSpawns - eleB.avgSpawns);
    } else {
      listaOrdenada = data.sort((eleA, eleB) => eleA.name > eleB.name ? 1 : -1);
    }
    break;
  case 'descendente':
    if (sortBy === 'za') {
      listaOrdenada = data.sort((eleA, eleB) => eleB.name > eleA.name ? 1 : -1);
    }    
    break;
  }
  return listaOrdenada;
};
/* ****FILTRAR POKEMON ***/
// 1.Funcion propia 
const filterData = (data, condition) => {
  let listaFiltrada = data.filter((element) => {
    for (let i = 0; i < element.type.length; i++) {
      if (element.type[i] === condition) {
        return 1;
      }
    }
  });
  return listaFiltrada;
};
// 2.Funcion de obtener solo el array de todos los tipos 
const listType = (data) => {
  const arrTipos = [];
  let tipo = [];
  data.forEach(element => {
    for (let i = 0; i < element.type.length; i++) {
      arrTipos.push(element.type[i]);
    }
    tipo = [...new Set(arrTipos)];
  });
  return tipo;
};
// 3.Funcion para tipos 
const nivelEvolution = (data, condicion) => {
  let Evolucion1 = [];
  let Evolucion2 = [];
  let Evolucion3 = [];
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    if (element.prev_evolution === undefined) {
      Evolucion1.push(element);
    } else {
      let cantidadPrev = element.prev_evolution.length;
      switch (cantidadPrev) {
      case 1:
        Evolucion2.push(element); break;
      case 2:
        Evolucion3.push(element); break;
      }
    }
  }
  switch (condicion) {
  case 'Evolucion1': return Evolucion1;
  case 'Evolucion2': return Evolucion2;
  case 'Evolucion3': return Evolucion3;
  }
};
/* **** CALCULAR POKEMON ******/
// 1. Obtener una data que se ajuste a  la medida de el calculo para la evolucion 
const dataListPokemon = (dataPoke) => {
  const dataCalculate = [];
  let propiedad;
  for (let i = 0; i < dataPoke.length; i++) {
    propiedad = dataPoke[i].hasOwnProperty('next_evolution');
    if (propiedad === true) {
      propiedad = dataPoke[i].next_evolution.length;
    } else {
      propiedad = 0;
    }
    dataCalculate.push({
      num: dataPoke[i].num,
      name: dataPoke[i].name,
      candyCount: dataPoke[i].candy_count,
      nextEvolution: dataPoke[i].next_evolution,
      numEvolutions: propiedad,
      img: dataPoke[i].img
    });
  }
  return dataCalculate;
};
// console.log(dataListPokemon(data));
// 2. funcion de calculo de evolucion
const computeStats = (dataPoke, pokemon, candyInput) => {
  const dataCalculatePokemon = dataListPokemon(dataPoke);
  // buscando al pokemon
  const pokemonFind = dataCalculatePokemon.find(poke => poke.name === pokemon);
  // saber el numero de evoluciones 
  const numberEvolutions = pokemonFind.numEvolutions;   
  // almacenar los datos de resultados
  let arrResult = [];                                      
  // Evolucion de Pokemon
  let pokemonEvolution;                                 
  // Hallar dulces que falta
  let calculoEvolution;                
  if (numberEvolutions > 0) {
    pokemonEvolution = dataCalculatePokemon.find(poke => poke.name === pokemonFind.nextEvolution[0].name);
    calculoEvolution = Math.abs(pokemonFind.candyCount - parseInt(candyInput));
  } else {
    pokemonEvolution = pokemonFind;
    calculoEvolution = 0;
  }
  arrResult.push({
    pokemonFirstName: pokemonFind.name,
    pokemonFirstImg: pokemonFind.img,
    pokemonFirstCandy: pokemonFind.candyCount,
    pokemonFirstInput: candyInput,
    pokemonEvolutionName: pokemonEvolution.name,
    pokemonEvolutionImg: pokemonEvolution.img,
    candyEvolution: calculoEvolution
  });
  return arrResult;
};
// console.log(computeStats(data ,"Venusaur",101)); 
window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData: sortData,
  filterData: filterData,
  listType: listType,
  nivelEvolution: nivelEvolution,
  dataListPokemon: dataListPokemon,
  computeStats: computeStats,
};

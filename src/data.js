/**** MOSTRAR POEKOM ****/
const mostrarListaPokemon = (dataPoke) => {

  pokedex = dataPoke.map(data => {
    return { num: data.num, img: data.img, name: data.name, avg_spawns: data.avg_spawns };
  });
  return pokedex;
};
/**** ORDENAR POKEMON ****/

const sortData = (data, sortBy, sortOrder) => {
  switch (sortOrder) {
    case 'ascendente':
      if (sortBy === 'avg_spawns') {
        listaOrdenada = data.sort((a, b) => a.avg_spawns - b.avg_spawns);
      }
      else if (sortBy === 'az') {
        listaOrdenada = data.sort((a, b) => a.name > b.name ? 1 : -1);
      }
      break;
    case 'descendente':
      listaOrdenada = data.sort((a, b) => b.name > a.name ? 1 : -1);
      break;
  }
  return listaOrdenada;
}
//console.log(sortData(dataPokedex,'az','ascendente'));

/***  FILTRAR POKEMON ***/
const filterData = (data, condition) => {
  listaFiltrada = data.filter((element) => {
    for (let i = 0; i < element.type.length; i++) {
      if (element.type[i] === condition) {

        return 1;
      }
    }
  });
  return listaFiltrada;

}
//console.log(filterData(data,'Fire'));
 

//data = POKEMON.pokemon;



const NivelEvolution=(data,condicion)=> {
let Evolucion1 = [];
let Evolucion2 = [];
let Evolucion3 = [];
for (let i = 0; i < data.length; i++) {
  let element = data[i];
  if (element.prev_evolution === undefined) {
    Evolucion1.push(element);
  } else {
    let cantidadPrev = element.prev_evolution.length
    switch (cantidadPrev) {
      case 1:
        Evolucion2.push(element); break;
      case 2:
        Evolucion3.push(element); break;
    }
  }
}
  switch (condicion) {
    case "Evolucion1": return Evolucion1; 
    case "Evolucion2": return Evolucion2;
    case "Evolucion3": return Evolucion3;
  }
}



const listType = (data) => {
  let arrTipos = [];
  let tipo = [];
  data.forEach(element => {
    for (let i = 0; i < element.type.length; i++) {
      arrTipos.push(element.type[i]);
    }
    tipo = [...new Set(arrTipos)]
  });
  return tipo;
}
//console.log(tipos(data));


/***** CALCULAR POKEMON ******/

const dataListPokemon = (dataPoke) => {
  calcularLista = []
  for (let i = 0; i < dataPoke.length; i++) {
    propiedad = dataPoke[i].hasOwnProperty('next_evolution');
    if (propiedad === true) {
      propiedad = dataPoke[i].next_evolution.length;
    }
    else {
      propiedad = 0;
    }
    calcularLista.push({
      num: dataPoke[i].num,
      name: dataPoke[i].name,
      candy_count: dataPoke[i].candy_count,
      next_evolution: dataPoke[i].next_evolution,
      prev_evolution: dataPoke[i].prev_evolution,
      num_evoluciones: propiedad,
      img: dataPoke[i].img
    })
  }
  return calcularLista;
}
//console.log(dataListPokemon(data));

const computeStats = (dataPoke, pokemon, dulce) => {
  calcularLista = dataListPokemon(dataPoke);
  encontrado = calcularLista.find(poke => poke.name === pokemon);
  numeroEvoluciones = encontrado.num_evoluciones;
  let arrResult = [];
  let evolucion;
  let anterior;
  let calculoEvolution;
  switch (numeroEvoluciones) {
    // No ha evolucionado aun
    case 2:
      if (dulce < encontrado.candy_count) {
        evolucion = calcularLista.find(poke => poke.name === encontrado.next_evolution[0].name);
        evolucion = evolucion.name;
        calculoEvolution = encontrado.candy_count - parseInt(dulce);
      }
      else {
        alert('no');
        evolucion = 'Este pokemon ya evoluciono ';
        calculoEvolution = 0;
      }
      break;
    // ya tiene la primera evolucion 
    case 1:
      anterior = calcularLista.find(poke => poke.name === encontrado.prev_evolution[0].name);
      anterior = anterior.candy_count;

      if (dulce > anterior && dulce < encontrado.candy_count) {
        evolucion = calcularLista.find(poke => poke.name === encontrado.next_evolution[0].name);
        evolucion = evolucion.name;
        calculoEvolution = encontrado.candy_count - parseInt(dulce);
      }
      else {
        alert('no');
        evolucion = 'Este pokemon ya evoluciono';
        calculoEvolution = 0;
      }
      break;
    // ya termino de evolucionar
    case 0:
      evolucion = 'Este pokemon ya tuvo todas su evoluciones ';
      calculoEvolution = 0;
      break;
  }
  arrResult.push({ evolution: evolucion, candy_evolution: calculoEvolution })
  return arrResult;

//console.log(computeStats(data ,"Ivysaur",25 ));





}
//2.Funcion de obtener solo el array de todos los tipos 
const listType = (data) =>{
  const arrTipos =[];
  let tipo =[];
  data.forEach(element => {
    for(let i = 0 ; i < element.type.length ; i++){
      arrTipos.push(element.type[i]);
    }  
    tipo = [...new Set(arrTipos)]
    });
  return tipo;
};
 //console.log(tipos(data));

/***** CALCULAR POKEMON ******/
//1. Obtener una data que se ajuste a  la medida de el calculo para la evolucion 
const dataListPokemon = (dataPoke) =>{
  const dataCalculate =[] 
  let propiedad;
  for(let i = 0 ; i < dataPoke.length ; i++  ){
    propiedad = dataPoke[i].hasOwnProperty('next_evolution');
    if(propiedad === true ){
       propiedad = dataPoke[i].next_evolution.length;
    } 
    else{
      propiedad = 0;
    }      
    dataCalculate.push( {
       num : dataPoke[i].num , 
       name : dataPoke[i].name , 
       candy_count : dataPoke[i].candy_count ,
       next_evolution : dataPoke[i].next_evolution,
       num_evolutions : propiedad,
       img : dataPoke[i].img })
  }
  return dataCalculate;
};
//console.log(dataListPokemon(data));
//2. funcion de calculo de evolucion
const computeStats = (dataPoke,pokemon,dulce) =>{
  const  dataCalculatePokemon = dataListPokemon(dataPoke);
  //buscando al pokemon 
  const pokemonFind = dataCalculatePokemon.find(poke=>poke.name === pokemon);
  const  numberEvolutions = pokemonFind.num_evolutions;          // saber el numero de evoluciones 
  let arrResult = [];                                     // almacenar los datos de resultados 
  let pokemonEvolution ;                                  // Evolucion de Pokemon
  let calculoEvolution;                                  // Hallar dulces que falta 
  switch (numberEvolutions){  
    case 2: // No ha tenido NINGUNA evolucion
    case 1:  // Ya ha tenido 1 EVOLUCION              
      if( dulce < pokemonFind.candy_count ){
          pokemonEvolution = dataCalculatePokemon.find( poke => poke.name === pokemonFind.next_evolution[0].name );
          calculoEvolution = pokemonFind.candy_count - parseInt(dulce);
      }
      else{
          pokemonEvolution = dataCalculatePokemon.find( poke => poke.name === pokemonFind.next_evolution[0].name );        
          calculoEvolution = Math.abs(pokemonFind.candy_count - parseInt(dulce));
      }          
    break;
    case 0:  //Tiene todas la evoluciones 
      pokemonEvolution = dataCalculatePokemon.find( poke => poke.name === pokemonFind.name )
      calculoEvolution = 0;
    break;
    }
    arrResult.push({
    pokemonCurrent : pokemonFind.name, 
    pokemonCurrentImg : pokemonFind.img,
    pokemonCurrentCandy : dulce,
    pokemonEvolution :pokemonEvolution.name, 
    pokemonEvolutionImg :pokemonEvolution.img,
    candy_evolution : calculoEvolution});    

    return arrResult;
};
 // console.log(computeStats(data ,"Venusaur",101)); 

window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData: sortData,
  filterData: filterData,
  NivelEvolution: NivelEvolution,
  listType: listType,
  dataListPokemon: dataListPokemon,
  computeStats: computeStats
}

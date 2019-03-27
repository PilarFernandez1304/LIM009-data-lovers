/*const  mostrarListaPokemon = (data) => {
  let lista = [];
  for(let i = 0 ; i < data.length ; i++)
    lista.push({num : data[i].num , img : data[i].img , name : data[i].name})
  return lista;
};*/


/**** PRUEBAS ****/
//const data = POKEMON.pokemon;

/**** MOSTRAR POEKOM ****/
const mostrarListaPokemon = (dataPoke) => {
  pokedex = dataPoke.map(data => {
    return { num: data.num, img: data.img, name: data.name, avg_spawns: data.avg_spawns };
  });
  return pokedex;
}
//const dataPokedex = mostrarListaPokemon(data);


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
}
//console.log(computeStats(data ,"Ivysaur",25 ));




window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData: sortData,
  filterData: filterData,
  NivelEvolution: NivelEvolution,
  listType: listType,
  dataListPokemon: dataListPokemon,
  computeStats: computeStats
}

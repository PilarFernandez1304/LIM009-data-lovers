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
  pokedex = dataPoke.map(data =>{
    return{num : data.num , img : data.img , name : data.name , avg_spawns : data.avg_spawns};
  });
  return pokedex;
}
//const dataPokedex = mostrarListaPokemon(data);

/**** ORDENAR POKEMON ****/
const sortData = (data,sortBy,sortOrder) =>{
    switch(sortOrder){
      case 'ascendente':
        if(sortBy ==='avg_spawns'){
          listaOrdenada = data.sort((a,b)=> a.avg_spawns - b.avg_spawns);
        }
        else if(sortBy ==='az' ){
          listaOrdenada = data.sort((a,b)=> a.name > b.name ? 1:-1);
        }            
      break;
      case 'descendente':
        listaOrdenada = data.sort((a,b)=>b.name > a.name ? 1:-1);
      break;
    }
    return listaOrdenada;
}
//console.log(sortData(dataPokedex,'az','ascendente'));

/***  FILTRAR POKEMON ***/
//1.Funcion propia 
const filterData = (data,condition) =>{
  listaFiltrada = data.filter((element)=>{
    for(let i = 0 ; i < element.type.length ; i++){
      if (element.type[i] === condition) {
        return 1;
      }
    }
  });
  return listaFiltrada;
}
//console.log(filterData(data,'Fire'));
//2.Funcion de obtener solo el array de todos los tipos 
const listType = (data) =>{
  let arrTipos =[];
  let tipo =[];
  data.forEach(element => {
    for(let i = 0 ; i < element.type.length ; i++){
      arrTipos.push(element.type[i]);
    }  
    tipo = [...new Set(arrTipos)]
    });
    return tipo;
 }
 //console.log(tipos(data));

//3.Funcion para la evolucion
let evolucion1=[];
let evolucion2=[];
let evolucion3=[];
for (let i=0 ; i<POKEMON.pokemon.length ; i++){
  let element=POKEMON.pokemon[i];
  if(element.prev_evolution === undefined)
  {
    evolucion1.push(element);
    
  
  }else{ 
    let cantidadPrev=element.prev_evolution.length
    switch(cantidadPrev){
      case 1:
      evolucion2.push(element);break;
      case 2:
      evolucion3.push(element);break;
    }
  }
}
//console.log(evolucion1)



/***** CALCULAR POKEMON ******/
//1. Obtener una data que se ajuste a  la medida de el calculo para la evolucion 
const dataListPokemon = (dataPoke) =>{
  dataCalculate =[] 
  for(let i = 0 ; i < dataPoke.length ; i++  ){
    propiedad = dataPoke[i].hasOwnProperty('next_evolution');
    if(propiedad === true ) {
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
}
//console.log(dataListPokemon(data));

//2. funcion de calculo de evolucion
const computeStats = (dataPoke,pokemon,dulce) =>{
  dataCalculatePokemon = dataListPokemon(dataPoke);
  //buscando al pokemon 
  pokemonFind = dataCalculatePokemon.find(poke=>poke.name === pokemon);
  numberEvolutions = pokemonFind.num_evolutions;          // saber el numero de evoluciones 
  let arrResult = [];                                     // almacenar los datos de resultados 
  let pokemonEvolution ;                                  // Evolucion de Pokemon
  let calculoEvolution;                                   // Hallar dulces que falta 

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
  }
 // console.log(computeStats(data ,"Venusaur",101));
  

window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData : sortData,
  filterData : filterData,
  listType : listType,
  dataListPokemon :dataListPokemon,
  computeStats :computeStats
}

/*const  mostrarListaPokemon = (data) => {
  let lista = [];
  for(let i = 0 ; i < data.length ; i++)
    lista.push({num : data[i].num , img : data[i].img , name : data[i].name})
  return lista;
};*/

// pruebas 
const data = POKEMON.pokemon;


const mostrarListaPokemon = (dataPoke) => {
  pokedex = dataPoke.map(data =>{
    return{num : data.num , img : data.img , name : data.name , avg_spawns : data.avg_spawns};
  });
  return pokedex;
}
const dataPokedex = mostrarListaPokemon(data);

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

const computeStats = (dataPoke) =>{
  /* Calculando cuantas evolcuiones tiene cada pokemon*/
  calcularLista =[] 
    for(let i = 0 ; i < dataPoke.length ; i++  ){
      propiedad = dataPoke[i].hasOwnProperty('next_evolution');
      if(propiedad === true ) {
         propiedad = dataPoke[i].next_evolution.length;
      } 
      else{
        propiedad = 0;
      }      
      calcularLista.push( {
         num : dataPoke[i].num , 
         img : dataPoke[i].img ,
         name : dataPoke[i].name , 
         candy_count : dataPoke[i].candy_count ,
         next_evolution : dataPoke[i].next_evolution,
         num_evoluciones : propiedad})
    }

    return calcularLista;   
  }
  console.log(computeStats(data));


/*
 pokeEncontrado = listaCalcular.find(poke=>poke.name===pokemon); 
 evolution=pokeEncontrado.next_evolution;
 pokeEvolution = listaCalcular.find(poke=>poke.name===evolution[0].name)
 calculoEvolution = pokeEncontrado.candy_count - parseInt(dulce)

 return { pokeEvolution , calculoEvolution};
}*/







window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData : sortData,
  filterData : filterData,
  listType : listType,
  computeStats :computeStats
}

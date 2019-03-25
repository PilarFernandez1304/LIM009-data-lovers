/*const  mostrarListaPokemon = (data) => {
  let lista = [];
  for(let i = 0 ; i < data.length ; i++)
    lista.push({num : data[i].num , img : data[i].img , name : data[i].name})
  return lista;
};*/

// pruebas 
//const data = POKEMON.pokemon;

const mostrarListaPokemon = (dataPoke) => {
  pokedex = dataPoke.map(data =>{
    return{num : data.num , img : data.img , name : data.name , avg_spawns : data.avg_spawns};
  });
  return pokedex;
}
//const dataPokedex = mostrarListaPokemon(data);

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
function NivelEvolucion(){
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
}


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


window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData : sortData,
  filterData :filterData,
  listType :listType

}

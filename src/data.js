/*const  mostrarListaPokemon = (data) => {
  let lista = [];
  for(let i = 0 ; i < data.length ; i++)
    lista.push({num : data[i].num , img : data[i].img , name : data[i].name})
  return lista;
};*/

const mostrarListaPokemon = (data) => {
  pokedex = data.map(data =>{
    return{num : data.num , img : data.img , name : data.name};
  });
  return pokedex;
}

const sortData = (data,sortOrder) =>{
    switch(sortOrder){
      case 'ascendente':
        listaOrdenada = data.sort((a,b)=> a.name > b.name ? 1:-1);    
      break;
      case 'descendente':
        listaOrdenada = data.sort((a,b)=>b.name > a.name ? 1:-1);
      break;
    }
    return listaOrdenada;
}
/*
const data = POKEMON.pokemon;
const dataPokedex = mostrarListaPokemon(data);

console.log(sortData(dataPokedex,'descendente'));

*/
window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData : sortData
}

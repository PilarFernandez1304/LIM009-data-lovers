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
        listaOrdenada = data.sort((a,b)=>{
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });    
      break;
      case 'descendente':
        listaOrdenada = data.sort((a,b)=>{
          if (b.name > a.name) {
            return 1;
          }
          if (b.name < a.name) {
            return -1;
          }
          return 0;
        });
      break;
    }

    return listaOrdenada;
}

const data = POKEMON.pokemon;
const dataPokedex = mostrarListaPokemon(data);

console.log(sortData(dataPokedex,'ascendente'));


window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
  sortData : sortData
}

/* const ordenarAZ = namepokedex.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
*/
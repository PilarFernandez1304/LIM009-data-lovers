const  mostrarListaPokemon = (data) => {
  let lista = [];
  for(let i = 0 ; i < data.length ; i++){
    lista.push({num : data[i].num , img : data[i].img , name : data[i].name})
  }
      return lista;
};

const filtrarTipoPokemon = (data)=>{
  data.filter()
};




window.pokemon = {
  mostrarListaPokemon: mostrarListaPokemon,
}
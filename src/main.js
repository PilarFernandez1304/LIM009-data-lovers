/* Manejo del DOM */
// 1. MENU 
const main = document.getElementById("main");
const pageHome = document.getElementById("page-home");
const pagePokedex = document.getElementById("page-pokedex");
const pageEvolution = document.getElementById("page-evolution");
const pageNews = document.getElementById("page-news");


main.addEventListener("click",(e)=>{
    pageHome.style.display = 'none';
    pagePokedex.style.display = 'none';
    pageEvolution.style.display = 'none';
    pageNews.style.display = 'none';

    if(e.target.id==="pokedex"){
        pagePokedex.style.display='block';
        document.getElementById('list-pokemon').innerHTML= crearPlantilla(data);
    }
    else if(e.target.id==="evolution"){
        pageEvolution.style.display='block';        
    }
    else if(e.target.id==="news"){
        pageNews.style.display='block';
    }
    else{
        pageHome.style.display='block';
    }
});

/*2.FUNCIONES */

const data = POKEMON.pokemon;
const dataPokedex = pokemon.mostrarListaPokemon(data); 

// MOSTRAR POKEMON 
const crearPlantilla = (data) => {
    let listaMostrada = [];
    data.forEach((data)=>{
        let card =`
        <div class="card-item grow">
        <h1>N° ${data.num}</h1>
        <img class="img-res" src='${data.img}'>
        <p>${data.name}</p>
        </div>
        `;
        listaMostrada +=card;
    });
    return listaMostrada;
};

// ORDENAR POKEMON
const orderPokemon = document.getElementById('order-pokemon');
orderPokemon.addEventListener('change',()=>{
    const selectOrder = orderPokemon.value;
    let sortOrder;
    switch(selectOrder){
        case 'avg_spawns':
        sortOrder = 'ascendente';
        break;
        case 'az':
        sortOrder ='ascendente';
        break;
        case 'za':
        sortOrder = 'descendente';
        break;
    }
    const pokedexOrdenado = pokemon.sortData(dataPokedex,selectOrder,sortOrder);
    document.getElementById('list-pokemon').innerHTML= crearPlantilla(pokedexOrdenado);
});


// FILTRAR POKEMON

let array; 
function SelectFilter(){
 const a = document.getElementById('FilterSelect').value;
    if(a==='1'){
          array=["Grass","Poison","Fire","Flying","Water",
          "Bug","Normal","Electric","Ground","Fighting",
          "Psychic","Rock","Ice","Ghost","Dragon"];

    }else if(a ==="2"){
         array=['1ª Evolucion','2ª Evolucion','3ª Evolucion'];
    }else{
        
         array=[];
    }
   let string='';
   
    for (let i = 0; i<array.length; i++) {
      let eleccion=array[i];   
     string =string+ '<option value="'+eleccion+'">'+eleccion+'</option>';        
    }
    
    string='<select id="filterType">'+string+'</select>';
    document.getElementById('FilterType').innerHTML=string

    const filterType=document.getElementById('filterType');
    filterType.addEventListener('change',()=>{
     condition=filterType.value;
     const pokedexFiltrado=pokemon.filterData(data,condition);
  // console.log(pokedexFiltrado);
     document.getElementById('list-pokemon').innerHTML=crearPlantilla(pokedexFiltrado);
     
     }
     
)};



// const filterPokemon = document.getElementById('filter-pokemon');
// filterPokemon.addEventListener('change',()=>{
//     condition = filterPokemon.value;
//     const pokedexFiltrado = pokemon.filterData(data,condition);
//    // console.log(pokedexFiltrado);
//     document.getElementById('list-pokemon').innerHTML=crearPlantilla(pokedexFiltrado);
// });

//aqui ira lo de dibujar
 /*
const filterPokemon = document.getElementById('filter-pokemon');
const generarTipo = (listTipos)=>{
    let types =[`<option disabled selected>Filtrar por:</option>`];
    for (let i = 0; i < listTipos.length ; i++){
       types += `<option value="${listTipos[i]}">${listTipos[i]}</option>`;
    }
    return types;
};
const tipos = pokemon.listType(data);
filterPokemon.innerHTML= generarTipo(tipos);

filterPokemon.addEventListener('change',()=>{
    condition = filterPokemon.value;
    const pokedexFiltrado = pokemon.filterData(data,condition);
    document.getElementById('list-pokemon').innerHTML=crearPlantilla(pokedexFiltrado);
}); */



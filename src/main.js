/* Manejo del DOM */
// 1. MENU 
const main = document.getElementById("main");
const pageHome = document.getElementById("page-home");
const pagePokedex = document.getElementById("page-pokedex");
const pageEvolution = document.getElementById("page-evolution");
const pageNews = document.getElementById("page-news");

//FORMULARIO RESULT
const calculateEvolution = document.getElementById('calculate-evolution'); 
const evolutionResult = document.getElementById('evolution-result');

main.addEventListener("click",(e)=>{
    pageHome.style.display = 'none';
    pagePokedex.style.display = 'none';
    pageEvolution.style.display = 'none';
    pageNews.style.display = 'none';

    if(e.target.id==="pokedex"){
        pagePokedex.style.display='block';
        document.getElementById('list-pokemon').innerHTML= crearPlantilla(dataPokedex);
    }
    else if(e.target.id==="evolution"){
        pageEvolution.style.display='block'; 
        // LIMPIAR FORMULARIO 
        calculateEvolution.style.display = 'block';
        evolutionResult.style.display ='none';
        limpiar();
    }
    else if(e.target.id==="news"){
        pageNews.style.display='block';
    }
    else{
        pageHome.style.display='block';
    }
});
/**** 2.FUNCIONES ***/
const data = POKEMON.pokemon;
const dataPokedex = window.pokemon.mostrarListaPokemon(data);
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
const FilterSelect = document.getElementById('FilterSelect')
FilterSelect.addEventListener('change', SelectFilter);
let array;
function SelectFilter() {
   const a = FilterSelect.value;
   if (a === '1') {
       array = pokemon.listType(data);
   }
   else if (a === "2") {
       array = ['Evolucion1', 'Evolucion2', 'Evolucion3'];
   } 
   else {
       array = [];
   }
   let string = '';
   for (let i = 0; i < array.length; i++) {
       let eleccion = array[i];
       string = string + '<option values="' + eleccion + '">' + eleccion + '</option>';
   }
   string = '<select id="filter">' + string + '</select>';
   document.getElementById('Filter').innerHTML = string;
   const filter = document.getElementById("filter");

   filter.addEventListener('change', () => {
       let condition = filter.value;
       if (condition === 'Evolucion1' || condition === 'Evolucion2' || condition === 'Evolucion3') {
           const filterEvolucion = pokemon.NivelEvolution(data,condition);
           document.getElementById('list-pokemon').innerHTML = crearPlantilla(filterEvolucion)
       } 
       else {
           const pokedexFiltrado = pokemon.filterData(data, condition);
           document.getElementById('list-pokemon').innerHTML = crearPlantilla(pokedexFiltrado);
       }
   });
}
// CALCULAR DATOS DE EVOLUCION
const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click',()=>{
    const namePokemon = document.getElementById('name-pokemon').value;
    const candyCount = document.getElementById('candy_count').value;
    const resultado = pokemon.computeStats(data,namePokemon,candyCount); // data resultado    
    const plantillaResultado = (data)=>{
        let respuesta;
        for(let i = 0; i< data.length ;i++){
            respuesta =`
                <h1>Tu pokemon </h1>
                <p>${data[i].pokemonCurrent }</p>
                <p>${data[i].pokemonCurrentCandy}</p>
                <img class="img-res" src='${data[i].pokemonCurrentImg}'>
                <h1> Evolucion </h1>
                <p>${data[i].pokemonEvolution}</p>
                <p>${data[i].candy_evolution}</p>
                <img class="img-res" src='${data[i]. pokemonEvolutionImg}'>
                `;
        }
        return respuesta;
    }
    calculateEvolution.style.display = 'none';
    evolutionResult.style.display = 'block';
    evolutionResult.innerHTML= plantillaResultado(resultado);    
});

const limpiar = () =>{
    document.getElementById("form").reset();
}


/* eslint-disable id-length */
/* Manejo del DOM */
// 1. MENU 
const main = document.getElementById('main');
const pageHome = document.getElementById('page-home');
const pagePokedex = document.getElementById('page-pokedex');
const pageEvolution = document.getElementById('page-evolution');
// const pageNews = document.getElementById("page-news");

// FORMULARIO RESULT
const calculateEvolution = document.getElementById('calculate-evolution');
const evolutionResult = document.getElementById('evolution-result');
const themeTitle = document.getElementById('theme-title');
const listPokemon = document.getElementById('list-pokemon');

main.addEventListener('click', (e) => {
  pageHome.style.display = 'none';
  pagePokedex.style.display = 'none';
  pageEvolution.style.display = 'none';
  // pageNews.style.display = 'none';

  if (e.target.id === 'pokedex') {
    pagePokedex.style.display = 'block';
    document.getElementById('list-pokemon').innerHTML = crearPlantilla(dataPokedex);
  } else if (e.target.id === 'evolution') {
    pageEvolution.style.display = 'block';
    // LIMPIAR FORMULARIO 
    calculateEvolution.style.display = 'block';
    evolutionResult.style.display = 'none';
    limpiar();
  } else if (e.target.id === 'home') {
    pageHome.style.display = 'block';
  }
});

/* ***ANIMACION SLIDER */
let btnleft = document.getElementById('right');
let btnright = document.getElementById('left');

let conteinerSlider = document.getElementById('conteinerSlider');
let contador = -100;
let limite = contador * 2;
btnleft.addEventListener('click', () => {
  let di = setInterval(() => {
    contador--;
    conteinerSlider.style.marginLeft = `${contador}%`;
    if (contador <= limite) {
      clearInterval(di);
      let son = conteinerSlider.children[0];
      let clon = son.cloneNode(true);
      conteinerSlider.removeChild(son);
      conteinerSlider.appendChild(clon);
      contador = -100;
      conteinerSlider.style.marginLeft = `${contador}%`;
    }
  }, 5);
});
btnright.addEventListener('click', () => {
  let di = setInterval(() => {
    contador++;
    conteinerSlider.style.marginLeft = `${contador}%`;
    if (contador >= 0) {
      clearInterval(di);
      let son = conteinerSlider.children[2];
      let clon = son.cloneNode(true);
      conteinerSlider.removeChild(son);
      conteinerSlider.insertBefore(clon, conteinerSlider.children[0]);
      contador = -100;
      conteinerSlider.style.marginLeft = `${contador}%`;
    }
  }, 5);
});

/* *** 2.FUNCIONES ***/
const data = POKEMON.pokemon;
const dataPokedex = pokemon.mostrarListaPokemon(data);
// MOSTRAR POKEMON 
const crearPlantilla = (data) => {
  let listaMostrada = [];
  data.forEach((data) => {
    let card = `
        <div class="card-item grow">
        <h1>N° ${data.num}</h1>
        <img class="img-res" src='${data.img}'>
        <p>${data.name}</p></div>`;
    listaMostrada += card;
  });
  return listaMostrada;
};
// ORDENAR POKEMON
const orderPokemon = document.getElementById('order-pokemon');
orderPokemon.addEventListener('change', () => {
  const selectOrder = orderPokemon.value;
  let sortOrder;
  switch (selectOrder) {
  case 'avg_spawns':
    sortOrder = 'ascendente';
    break;
  case 'az':
    sortOrder = 'ascendente';
    break;
  case 'za':
    sortOrder = 'descendente';
    break;
  }
  const pokedexOrdenado = pokemon.sortData(dataPokedex, selectOrder, sortOrder);
  themeTitle.innerHTML = `Pokedex esta ordenado por ${selectOrder} `;
  listPokemon.innerHTML = crearPlantilla(pokedexOrdenado);
});
// FILTRAR POKEMON
const filterSelect = document.getElementById('filterSelect');
filterSelect.addEventListener('change', () => {
  let typeSelect = filterSelect.value;
  let types = '';
  const subOptionsOne = pokemon.listType(data);
  const subOptionsSecond = ['Evolucion1', 'Evolucion2', 'Evolucion3'];
  if (typeSelect === '1') {
    for (let i = 0; i < subOptionsOne.length; i++) {
      types += `<option value="${subOptionsOne[i]}">${subOptionsOne[i]}</option>`;
    }
  } else if (typeSelect === '2') {
    for (let i = 0; i < subOptionsSecond.length; i++) {
      types += `<option value="${subOptionsSecond[i]}">${subOptionsSecond[i]}</option>`;
    }
  }
  const filterSpecific = document.getElementById('filterSpecific');
  filterSpecific.innerHTML = `<select id="filter">${types}</select>`;
  const filter = document.getElementById('filter');
  filter.addEventListener('change', () => {
    let condition = filter.value; // value
    themeTitle.innerHTML = `Lista de los Pokemon de tipo  ${condition}`;
    if (condition === 'Evolucion1' || condition === 'Evolucion2' || condition === 'Evolucion3') {
      const filterEvolucion = pokemon.nivelEvolution(data, condition);
      document.getElementById('list-pokemon').innerHTML = crearPlantilla(filterEvolucion);
    } else {
      const pokedexFiltrado = pokemon.filterData(data, condition);
      document.getElementById('list-pokemon').innerHTML = crearPlantilla(pokedexFiltrado);
    }
  });
});

// CALCULAR DATOS DE EVOLUCION

const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', (e) => {
  const validate = (string) => {
    string = string.toLowerCase();
    let stringValidate = string.charAt(0).toUpperCase() + string.slice(1);
    return stringValidate;
  };
  const namePokemon = validate(document.getElementById('name-pokemon').value);
  const candyCount = document.getElementById('candy-count').value;
  const resultado = pokemon.computeStats(data, namePokemon, candyCount); // data resultado   
  e.preventDefault();
  const plantillaResultado = (data) => {
    let respuesta;
    for (let i = 0; i < data.length; i++) {
      if (data[i].pokemonFirstCandy === undefined) {
        respuesta = `
          <h1>Tu pokemon ya tuvo todas sus evoluciones :</h1>
          <p>${data[i].pokemonFirstName}</p>
          <img class="img-res" src='${data[i].pokemonFirstImg}'>
          <p> Te sobra ${data[i].pokemonFirstCandyInput}</p>`;
      } else {
        if (data[i].pokemonFirstCandyInput < data[i].pokemonFirstCandy) {
          respuesta = `
            <h1>Tu pokemon  es :</h1>
            <p>${data[i].pokemonFirstName}</p>
            <img class="img-res" src='${data[i].pokemonFirstImg}'>
            <h1> Tienes  ${data[i].pokemonFirstCandyInput} dulces, te faltan  ${data[i].candyEvolution} para evolucionar a :</h1>                
            <p>${data[i].pokemonEvolutionName}</p>
            <img class="img-res" src='${data[i].pokemonEvolutionImg}'>`;
        } else {
          respuesta = `
          <h1>Tu pokemon  es :</h1>
          <p>${data[i].pokemonFirstName}</p>
          <img class="img-res" src='${data[i].pokemonFirstImg}'>
          <h1>Este ya debio evolucionar a:</h1>                                    
          <p>${data[i].pokemonEvolutionName}</p>
          <img class="img-res" src='${data[i].pokemonEvolutionImg}'>
          <h1>Tienes ${data[i].pokemonFirstCandyInput} dulces , te sobran  ${data[i].candyEvolution} para la siguiente evolcion</h1>
          `;
        }
      }
    }
    return respuesta;
  };
  calculateEvolution.style.display = 'none';
  evolutionResult.style.display = 'block';
  evolutionResult.innerHTML = plantillaResultado(resultado);
});
const limpiar = () => {
  document.getElementById('form').reset();
};


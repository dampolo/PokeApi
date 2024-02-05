let searchTimeout;
let newArray;

document.querySelector('input[type="search"]').addEventListener('input', ()=>{
clearTimeout(searchTimeout);

searchTimeout = setTimeout(()=> {
    const search = document.getElementById("search").value.toLowerCase();
    searchFunction(search);
    }, 1000);
})

async function searchFunction(search) {
  document.querySelector('.load-more-pokemons').disabled = true;
    if (search !== '') {
      // Clear existing content
      document.querySelector('.content-single').innerHTML = '';
      document.querySelector('.show').innerHTML = '';
      document.querySelector('.search-show').innerHTML = '';
      document.querySelector('.search-content-single').innerHTML = '';
      document.querySelector('.favorite-content-single').innerHTML = '';
    
      // Hide/show elements
      document.querySelector('.content-single').classList.add('d-none');
      document.querySelector('.search-content-single').classList.remove('d-none');
      document.querySelector('.favorite-content-single').classList.add('d-none');

      // Fetch data
      const allPokemonsListId = await searchPokemonApi();
      const combinedArray = allPokemonsListId.map((pokemon) => ({
        name: pokemon.name,
        url: extractNumberFromUrl(pokemon.url),
      }));
    
      // Filter data based on search
      const filteredResults = combinedArray.filter((pokemon) => pokemon.name.includes(search));
      
      if (filteredResults.length === 0) {
        // If no results found
        document.querySelector('.search-content-single').innerHTML = 'No results found.';
      } else {
        // If results found, proceed to load and display them
        const urlArray = filteredResults.map((pokemon) => pokemon.url);
        newArray = urlArray;
        loadAllPokemonsApiWithSearch(urlArray);
      }
    } else {
      loadPokemonsAfterSearch();
    }
}

function searchRenderPokemonInfo(id, i) {
    document.querySelector(".search-pokemon-bigger").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("search-image-left").style.visibility = 'visible';
    document.getElementById("search-image-right").style.visibility = 'visible';
  
    if(i ===  0 && i === (newArray.length - 1)) {
      document.getElementById("search-image-left").style.visibility = 'hidden';
      document.getElementById("search-image-right").style.visibility = 'hidden';
    } else if (i ===  0) {
      document.getElementById("search-image-left").style.visibility = 'hidden';
    } else if (i === (newArray.length - 1)) {
      document.getElementById("search-image-right").style.visibility = 'hidden';
    }

    loadPokemonInfo(id);
    searchAddNumberToNextImageRight(id, i);
    searchAddNumberToNextImageLeft(id, i);
    // id--;
    searchUpdateOffset(i);
  }


function searchUpdateOffset(i) {
    const offset = -i * 100 + "%";
    document.querySelector(".search-show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}
  
function searchUpdateOffsetLeft(i) {
    const offset = -i * 100 + "%";
    document.querySelector(".search-show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}
  
  //##23 - load-single-pokemon.js
function searchAddNumberToNextImageRight(id, i) {
  document.getElementById("search-image-right").setAttribute("onclick", `searchNextImageRight(${id}, ${i})`);
}
  
  //##24 - load-single-pokemon.js
function searchAddNumberToNextImageLeft(id, i) {
  document.getElementById("search-image-left").setAttribute("onclick", `searchNextImageLeft(${id}, ${i})`);
}

function searchNextImageRight(id, i) {
  document.getElementById("search-image-left").style.visibility = 'visible';
  i++
  id = newArray[i]
  searchUpdateOffset(i);
  loadPokemonInfo(id);
  if (i === (newArray.length - 1)) {
    document.getElementById("search-image-right").style.visibility = 'hidden';
  } else {
    searchAddNumberToNextImageRight(id, i);
  }
  searchAddNumberToNextImageLeft(id, i);
}

function searchNextImageLeft(id, i) {
  document.getElementById("search-image-right").style.visibility = 'visible';
  i--;
  id = newArray[i]
  searchUpdateOffsetLeft(i);
  loadPokemonInfo(id);
  if(i ===  0) {
    document.getElementById("search-image-left").style.visibility = 'hidden';
  } else {
    searchAddNumberToNextImageLeft(id, i);
  }
  searchAddNumberToNextImageRight(id, i);
}

function findFavorite(id) {
  return favoriteArray.includes(id);
}

function loadPokemonsAfterSearch() {
  
  document.querySelector('.homepage').classList.add('nav-menu-element-active')
  document.querySelector('.favorite').classList.remove('nav-menu-element-active')

  document.querySelector('.pokemons').classList.add('cursor-progress')
  document.querySelector('.content-single').classList.remove('d-none');
  document.querySelector('.content-single').innerHTML = '';
  document.querySelector('.favorite-show').innerHTML = '';
  document.querySelector('.favorite-content-single').innerHTML = '';

  document.querySelector('.search-content-single').classList.add('d-none');
  document.querySelector('.load-more-pokemons').removeAttribute("disabled");
  
  for (let id = originPokemon; id <= amountOfThePokemon; id++) {
    loadAllPokemonsHtml(id);
    loadPokemons(id);
  
    if (findFavorite(id)) {
      loadAllSinglePokemonsBigHtmlWithHeart(id)
    } else {
      loadAllSinglePokemonsBigHtmlOhneHeart(id);
    }
  }
  document.querySelector('.pokemons').classList.remove('cursor-progress')

}
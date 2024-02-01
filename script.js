let originPokemon = 1;
let firstPokemon = 1;
let amountOfThePokemon = 20;
let id;

let favoriteArray = [];

function loadAllPokemonsApi() {
  addPreLoader()
  for (let id = firstPokemon; id <= amountOfThePokemon; id++) {
    loadAllPokemonsHtml(id);
    loadPokemons(id);
    loadAllSinglePokemonsBigHtml(id);
  }
  setTimeout(removePreLoader, 1000);
}

function loadPokemonInfoBig(id) {
  document.querySelector(".pokemon-bigger").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
  document.getElementById("imageLeft").style.visibility = 'visible';
  document.getElementById("imageRight").style.visibility = 'visible';

  if(id ===  1 ) {
    document.getElementById("imageLeft").style.visibility = 'hidden';
  }
  if (id === amountOfThePokemon) {
    document.getElementById("imageRight").style.visibility = 'hidden';
  } 
  loadPokemonInfo(id);
  addNumberToNextImageRight(id);
  addNumberToNextImageLeft(id);
  updateOffset(id);
}

function loadPokemonsAfterSearch() {
  document.querySelector('.content-single').classList.remove('d-none');
  document.querySelector('.content-single').innerHTML = '';

  document.querySelector('.search-content-single').classList.add('d-none');
  document.querySelector('.load-more-pokemons').removeAttribute("disabled");
  
  for (let id = originPokemon; id <= amountOfThePokemon; id++) {
    loadAllPokemonsHtml(id);
    loadPokemons(id);
    loadAllSinglePokemonsBigHtml(id);
  }
}

function loadMorePokemons() {
  document.querySelector('.load-more-pokemons').style = 'cursor: progress';
  if (amountOfThePokemon === 1060) {
      firstPokemon = firstPokemon + 20;
      amountOfThePokemon = amountOfThePokemon + 5;
      document.querySelector(".load-more-pokemons").setAttribute("disabled", null);
      loadAllPokemonsApi();
    } else {
      firstPokemon = firstPokemon + 20;
      amountOfThePokemon = amountOfThePokemon + 20;
      loadAllPokemonsApi();
    }
  document.querySelector('.load-more-pokemons').style = 'cursor: pointer';
}

function loadAllPokemonsApiWithSearch(names) {
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(i)
    loadAllPokemonsSearchHtml(element, i);
    searchAllSinglePokemonsBigHtml(element);
    loadPokemons(element);
  }
}

function nextImageRight(id) {
  document.getElementById("imageLeft").style.visibility = 'visible';
  id++
  updateOffset(id);
  loadPokemonInfo(id);
  if (id === amountOfThePokemon) {
    document.getElementById("imageRight").style.visibility = 'hidden';
  } else {
    addNumberToNextImageRight(id);
  }
  addNumberToNextImageLeft(id);
}

function nextImageLeft(id) {
  document.getElementById("imageRight").style.visibility = 'visible';
  id--;
  console.log(id)
  updateOffsetLeft(id);
  loadPokemonInfo(id);
  if(id ===  1) {
    document.getElementById("imageLeft").style.visibility = 'hidden';
  } else {
    addNumberToNextImageLeft(id);
  }
  addNumberToNextImageRight(id);
}

function closeImage() {
  document.querySelector(".pokemon-bigger").style.display = "none";
  document.querySelector(".search-pokemon-bigger").style.display = "none";

  document.querySelector("body").style.overflow = "auto";
  // document.querySelector('body').style.top = Math.round(window.scrollY) + 'px';
}

function toRight(id) {
  const listContainer = document.querySelector(
    `.pokemon-navbar[data-id="${id}"]`
  );
  listContainer.scrollLeft += 115;
  document.getElementById("left-icon").style.display = "flex";
//   Check if we've reached the end
//   if (listContainer.scrollLeft + listContainer.clientWidth >= listContainer.scrollWidth) {
//   Hide the right arrow icon
//     document.getElementById("right-icon").style.display = "none";
//   }
}

// Scroll to left
function toLeft(id) {
  const listContainer = document.querySelector(
    `.pokemon-navbar[data-id="${id}"]`
  );
  listContainer.scrollLeft -= 115;

  if (listContainer.scrollLeft === 0) {
    //   document.getElementById("left-icon").style.display = "none";
  }
  // Show the right arrow icon when scrolling left
  // document.getElementById("right-icon").style.display = "flex";
}

function doNotCLose(event) {
  event.preventDefult();
}

function showScrollY() {
  console.log(window.scrollY);
}

showScrollY();

// Get the button
let mybutton = document.querySelector(".c-scroll-top");
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.classList.add('c-scroll-top--visible')

  } else {
    mybutton.classList.remove('c-scroll-top--visible')
  }
}

function updateOffset(id) {
  const offset = -id * 100 + 100 + "%";
  document.querySelector(".show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}

function updateOffsetLeft(id) {
  const offset = -id * 100 + 100 + "%";
  document.querySelector(".show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}

//##23 - load-single-pokemon.js
function addNumberToNextImageRight(id) {
  document.getElementById("imageRight").setAttribute("onclick", `nextImageRight(${id})`);
}

//##24 - load-single-pokemon.js
function addNumberToNextImageLeft(id) {
  document.getElementById("imageLeft").setAttribute("onclick", `nextImageLeft(${id})`);
}

window.addEventListener("load", preLoader)

function preLoader() {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
};

function addPreLoader() {
  document.querySelector('[data-id-big-loader]').classList.remove('loader-hidden')
}

function removePreLoader() {
  document.querySelector('[data-id-big-loader]').classList.add('loader-hidden')
}

function addOrRemovePokemonToFavorite(id) {
  const index = favoriteArray.indexOf(id);

  if (index === -1) {
    // Pokemon ID not found in the favoriteArray, add it
    favoriteArray.push(id);
    
    document.querySelector(`.icon-heart[data-id="${id}"]`).innerHTML = `<use href="./icons/heart-red.svg#Layer_1"></use>`
    document.querySelector(`.confirmation[data-id="${id}"]`).classList.add('show-confirmation')
    
    document.querySelector(`.confirmation[data-id="${id}"]`).innerHTML = `<h6 class="confirmation-text">Good choice! Pokemon added to favorite.</h6>`
    setTimeout(() => {
      removeShowConfirmation(id);
    }, 4000);
  } else {
    // Pokemon ID found in the favoriteArray, remove it
    favoriteArray.splice(index, 1);
    document.querySelector(`.icon-heart[data-id="${id}"]`).innerHTML = `<use href="./icons/heart-regular.svg#Layer_1"></use>`
    document.querySelector(`.confirmation[data-id="${id}"]`).classList.add('show-confirmation')
    document.querySelector(`.confirmation[data-id="${id}"]`).innerHTML = `<h6 class="confirmation-text">Removed from the favorite.</h6>`
    setTimeout(() => {
      removeShowConfirmation(id);
    }, 4000);
  }
}

function removeShowConfirmation(id) {
  document.querySelector(`.confirmation[data-id="${id}"]`).classList.remove('show-confirmation')
}

function showFavariteArray() {
  document.querySelector('.content-single').innerHTML = ''
  for (let i = 0; i < favoriteArray.length; i++) {
    const element = favoriteArray[i];
    loadAllPokemonsHtml(element)
    loadPokemons(element);
  }
}
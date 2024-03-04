let originPokemon = 1;
let firstPokemon = 1;
let amountOfThePokemon = 20;
let id;

function loadAllPokemonsApi() {
  for (let id = firstPokemon; id <= amountOfThePokemon; id++) {
    loadAllPokemonsHtml(id);
    loadPokemons(id);
    loadAllSinglePokemonsBigHtml(id);
  }
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
  preventDefaultClick()
}

function loadMorePokemons() {
  document.querySelector('.little-loader').classList.remove('d-none')
  document.querySelector('.load-more-pokemons').disabled = true;

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
  document.querySelector('.little-loader').classList.add('d-none')
  document.querySelector('.load-more-pokemons').disabled = false;
}

function loadAllPokemonsApiWithSearch(names) {
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    loadAllPokemonsSearchHtml(element, i);
    searchAllSinglePokemonsBigHtml(element);
    loadPokemons(element);
    preventDefaultClick()
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
  document.querySelector(".favorite-pokemon-bigger").style.display = "none";


  document.querySelector("body").style.overflow = "auto";
  // document.querySelector('body').style.top = Math.round(window.scrollY) + 'px';
}

function toRight(id) {
  const listContainer = document.querySelector(`.pokemon-navbar[data-id="${id}"]`);
  listContainer.scrollLeft += 115;
  document.getElementById(`left-icon${id}`).style.visibility = "visible";
  // Check if we've reached the end
  if (listContainer.scrollLeft + listContainer.clientWidth >= listContainer.scrollWidth) {
  // Hide the right arrow icon
    document.getElementById(`right-icon${id}`).style.visibility = "hidden";
  }
}

// Scroll to left
function toLeft(id) {
  const listContainer = document.querySelector(`.pokemon-navbar[data-id="${id}"]`);
  listContainer.scrollLeft -= 115;
  if (listContainer.scrollLeft === 0) {
      document.getElementById(`left-icon${id}`).style.visibility = "hidden";
  }
  // Show the right arrow icon when scrolling left
  document.getElementById(`right-icon${id}`).style.visibility = "visible";
}

function doNotCLose(event) {
  event.preventDefult();
}

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
  document.querySelector(".loader").classList.remove('loader-hidden')
  console.log('START')
}

function removePreLoader() {
  document.querySelector(".loader").classList.add('loader-hidden');
  console.log('STOP')
}

function preventDefaultClick() {
  let elementsClick = document.querySelectorAll('a[href="x"]');
  
  for (let i = 0; i < elementsClick.length; i++) {
    elementsClick[i].addEventListener('click', function(event) {
      event.preventDefault();
      console.log
      // Your other click event handling code goes here
    });
  }
}

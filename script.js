let allPokemons;

let currentPokemonSpecies;
let currentPokemonEvolution;

let amountOfThePokemon = 30;

async function loadAllPokemonsApi() {
    for (let id = 1; id <= amountOfThePokemon; id++) {
        loadAllPokemonsHtml(id)
        loadPokemons(id)
    }
}

async function renderPokemonInfo(id) {
    document.querySelector('.main-slider-container').style.display = 'flex';
    loadPokemonInfo(id)   
}


function allPictures() {
    const parentElement = document.querySelector(".picture")
    
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    
    for (let i = 0; i < imageTypes.length; i++) {
        
        const node = document.createElement("img")
        if((getImageSource(currentPokemon.sprites, imageTypes[i])) == null) {
            node.classList.add("d-none");
        } else {
            node.src = getImageSource(currentPokemon.sprites, imageTypes[i]);
            node.classList.add("all-picture");
            document.querySelector(".picture").appendChild(node);
        }
    }
}
    function getImageSource(sprites, type) {
        const keys = type.split('.');
        let result = sprites;
        for (let i = 0; i < keys.length; i++) {
          result = result[keys[i]];
        }
        return result;
      }

function nextImageRight() {
    id++
    loadPokemon()
}

function lastImageLeft() {
    id--;
    loadPokemon()
}

function closeImage() {
    document.querySelector('.main-slider-container').style.display = 'none';
    document.querySelector('.main-slider-container').style.display = 'none';

}

function toRight() {
    const listContainer = document.querySelector(".pokemon-navbar");
    listContainer.scrollLeft += 115;
    document.getElementById("left-icon").style.display = "flex";
    // Check if we've reached the end
    // if (listContainer.scrollLeft + listContainer.clientWidth >= listContainer.scrollWidth) {
      // Hide the right arrow icon
    //   document.getElementById("right-icon").style.display = "none";
    // }
  }
  
  // Scroll to left 
  function toLeft() {
    const listContainer = document.querySelector(".pokemon-navbar");
    listContainer.scrollLeft -= 115;
  
    if(listContainer.scrollLeft === 0) {
    //   document.getElementById("left-icon").style.display = "none";
    }
    // Show the right arrow icon when scrolling left
    // document.getElementById("right-icon").style.display = "flex";
  }

function showSection(sectionClass) {
    const sections = ['about-section', 'pokemon-languages', 'pokemon-stats', 'pokemon-evolution', 'pokemon-moves', 'growth-rate', 'other-pictures'];
    const navMenu = ['about-nav-item', 'languages-nav-item', 'stats-nav-item', 'evolution-nav-item', 'moves-nav-item', 'growth-rate-nav-item', 'other-pictures-nav-item'];
    const navMenuA = ['about-nav-item-a', 'languages-nav-item-a', 'stats-nav-item-a', 'evolution-nav-item-a', 'moves-nav-item-a', 'growth-rate-nav-item-a', 'other-pictures-nav-item-a'];

  
    sections.forEach((section, i) => {
      const element = document.querySelector(`.${section}`);
      const menuElement = document.querySelector(`.${navMenu[i]}`);
      const AElement = document.querySelector(`.${navMenuA[i]}`);

  
      if (section === sectionClass) {
        element.classList.remove('d-none');
        menuElement.classList.add('active'); // Highlight corresponding nav menu item
        AElement.classList.add('active-a'); // Highlight corresponding nav menu item
        
    } else {
        element.classList.add('d-none');
        menuElement.classList.remove('active'); // Remove active class from other nav menu items
        AElement.classList.remove('active-a');
        }
    });
}
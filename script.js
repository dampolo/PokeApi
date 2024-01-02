let allPokemons;

let currentPokemonSpecies;
let currentPokemonEvolution;

let currentPokemonEvolutionChain;

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

function extractNumberFromUrl(url) {
    // Match the last sequence of digits in the URL
    const match = url.match(/\/(\d+)\/$/);
    // Check if there is a match
    if (match && match[1]) {
        // Extracted number
        const number = parseInt(match[1], 10);
        temporaryId = number;
        return number;
    } else {
        // Return an error or handle the case where no number is found
        return null;
    }
}

function evolutionLoadTheNameFromTheChain(defultName, firstName, secondName) {
    const defultNameEl = document.querySelector('.defult-name-evolution');
    defultNameEl.textContent = defultName;

    const firstNameEl = document.querySelectorAll('.first-name-evolution');
        for (let i = 0; i < firstNameEl.length; i++) {
            firstNameEl[i].textContent = firstName;;
        }

    const secondNameEl = document.querySelector('.second-name-evolution');
    secondNameEl.textContent = secondName;
}

function evolutionLoadTheNameFromTheChain(defultName, firstName, secondName) {
    const defultNameEl = document.querySelector('.defult-name-evolution');
    defultNameEl.textContent = defultName;

    const firstNameEl = document.querySelectorAll('.first-name-evolution');
        for (let i = 0; i < firstNameEl.length; i++) {
            firstNameEl[i].textContent = firstName;;
        }

    const secondNameEl = document.querySelector('.second-name-evolution');
    secondNameEl.textContent = secondName;
}

function evolutionLoadTheImageThroughTheNameFromTheChainOneEvolution(defultPokemonImg, firstPokemonImg) {
    document.querySelector('.img-defult-name-evolution').src = defultPokemonImg.sprites.other.home.front_default;
    
    const imgFirstName = document.querySelectorAll('.img-first-name-evolution')
        for (let i = 0; i < imgFirstName.length; i++) {
            imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
        }
}

function evolutionLoadTheImageThroughTheNameFromTheChainTwoEvolution(defultPokemonImg, firstPokemonImg, secondPokemonImg ) {
    document.querySelector('.img-defult-name-evolution').src = defultPokemonImg.sprites.other.home.front_default;
    
    const imgFirstName = document.querySelectorAll('.img-first-name-evolution')
        for (let i = 0; i < imgFirstName.length; i++) {
            imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
        }
        document.querySelector('.img-second-name-evolution').src = secondPokemonImg.sprites.other.home.front_default;
}
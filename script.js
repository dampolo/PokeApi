const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let firstPokemon = 934
let amountOfThePokemon = 937;

let id;

function loadAllPokemonsApi() {
    for (let id = firstPokemon; id <= amountOfThePokemon; id++) {
        loadAllPokemonsHtml(id)
        loadPokemons(id)
    }
}

function loadAllPokemonsApiNew(names) {
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        loadAllPokemonsHtml(element)
        loadPokemons(element)
    }
}


function renderPokemonInfo(id) {
    document.querySelector('.main-slider-container').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
    loadPokemonInfo(id)
}

function nextImageRight(id) {
    id++
    loadPokemonInfo(id)
}

function lastImageLeft(id) {
    id--;
    loadPokemonInfo(id)
}

function closeImage() {
    document.querySelector('.main-slider-container').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}

function toRight(event) {
    event.stopPropagation();
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
  function toLeft(event) {
    event.stopPropagation();
    const listContainer = document.querySelector(".pokemon-navbar");
    listContainer.scrollLeft -= 115;
  
    if(listContainer.scrollLeft === 0) {
    //   document.getElementById("left-icon").style.display = "none";
    }
    // Show the right arrow icon when scrolling left
    // document.getElementById("right-icon").style.display = "flex";
  }

function showSection(sectionClass) {
    const sections = ['about-section', 'description-section', 'pokemon-languages', 'pokemon-stats', 'pokemon-evolution', 'pokemon-moves', 'growth-rate', 'other-pictures'];
    const navMenu = ['about-nav-item', 'description-nav-item', 'languages-nav-item', 'stats-nav-item', 'evolution-nav-item', 'moves-nav-item', 'growth-rate-nav-item', 'other-pictures-nav-item'];
    const navMenuA = ['about-nav-item-a', 'description-nav-item-a', 'languages-nav-item-a', 'stats-nav-item-a', 'evolution-nav-item-a', 'moves-nav-item-a', 'growth-rate-nav-item-a', 'other-pictures-nav-item-a'];
  
    sections.forEach((section, i) => {
      const element = document.querySelector(`.${section}`);
      const menuElement = document.querySelector(`.${navMenu[i]}`);
      const AElement = document.querySelector(`.${navMenuA[i]}`);

      if (section === sectionClass) {
        element.classList.remove('d-none');
        menuElement.classList.add('active'); // Highlight corresponding nav menu item
        AElement.classList.add('active-a'); // Highlight corresponding nav menu item
    } 
    else {
        element.classList.add('d-none');
        menuElement.classList.remove('active'); // Remove active class from other nav menu items
        AElement.classList.remove('active-a');
        }
    });
}


function pokemonLanguages(sectionClass, event) {
    event.stopPropagation();
    const sections = ['english', 'german', 'spanish', 'french', 'italian', 'japanese', 'koreanish', 'chinesisch']
    const showSection = ['description-section-english', 'description-section-german', 'description-section-spanish', 'description-section-french', 'description-section-italian', 'description-section-japan', 'description-section-korean', 'description-section-china']

    sections.forEach((section, i) => {
        const element = document.querySelector(`.${sections[i]}`)
        const showEl = document.querySelector(`.${showSection[i]}`)

        if (section === sectionClass) {
            element.classList.add('flag-active')
            showEl.classList.remove('d-none')
        } else {
            showEl.classList.add('d-none')
            element.classList.remove('flag-active')
        }
    });
};

function loadMorePokemons() {
    firstPokemon = firstPokemon + 10
    amountOfThePokemon = amountOfThePokemon + 10
    loadAllPokemonsApi()
}

function doNotCLose(event) {
    event.stopPropagation();
}
let allPokemons;

let currentPokemonSpecies;
let currentPokemonEvolution;

let currentPokemonEvolutionChain;
let currentPokemonGrowth;
let pokemonAllGrowthRates;

let defultEvolutionPokemonName
let firstEvolutionPokemonName;
let secondEvolutionPokemonName;

let temporaryId;

let amountOfThePokemon = 10;
let defultName;
let firstName;
let secondName;

// async function mainEvolutionAPI() {
//         pokemonGrowthRates = await sendRequest(`/growth-rate/`)
//         pokemonAllGrowthRates = pokemonGrowthRates.results
//         currentPokemonEvolutionChain = currentPokemonSpecies.evolution_chain.url
//         extractNumberFromUrl(currentPokemonEvolutionChain)
//         currentPokemonEvolution = await sendRequest(`/evolution-chain/${temporaryId}`)
//         namePokemon = currentPokemonEvolution.chain.species.name
//         evolutionLoadTheNameFromTheChain()
//         defultPokemonName = await sendRequest(`/pokemon/${defultName}`);
//         firstPokemonName = await sendRequest(`/pokemon/${firstName}`);
//         secondPokemonName = await sendRequest(`/pokemon/${secondName}`);
//         evolutionLoadTheImageThroughTheNameFromTheChain()
// }

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

//height of the pokemon.
function pokemonWeight() {
    const pokemonHeight = ((currentPokemon.height*10)/100).toFixed(2)
    document.querySelector('.pokemon-height').innerHTML = pokemonHeight + ' cm';
}

//weight of the pokemon.
function pokemonHeight() {
    const pokemonWeight = (currentPokemon.weight)/10;
    document.querySelector('.pokemon-weight').innerHTML = pokemonWeight + ' kg';
}


// Mrs or Mr
function pokemonFamaleOrMale() {
    const famalePrecent = (currentFemaleMale*100)/8;
    const malePrecent = (100 - famalePrecent);
    document.querySelector('.pokemon-gender-female').textContent = famalePrecent + '%';
    document.querySelector('.pokemon-gender-male').textContent = malePrecent + '%';
}


function pokemonAbilities() {
    const abilitiesEl = document.querySelector(".pokemon-abilities")
    abilitiesEl.textContent = '';

    for (let i = 0; i < currentPokemonAbilities.length; i++) {
        const element = currentPokemonAbilities[i];
        if (i > 0) {
            abilitiesEl.textContent += ', ';
        }
        abilitiesEl.textContent += `${element.ability.name}`
    }
}



function pokemonMoves() {
    const movesEl = document.querySelector(".pokemon-moves-content")
    movesEl.innerHTML = '';

    for (let i = 0; i < currentPokemonMoves.length; i++) {
        const element = currentPokemonMoves[i];
        movesEl.innerHTML += `<div class="pokemon-move-name">${element.move.name}</div>`
    }
}

function pokemonGrowth() {
    document.querySelector('.growth-rate-content-dd').innerHTML = `${currentPokemonGrowth.name}`
}

function pokemonAllGrowths() {
    for (let i = 0; i < pokemonAllGrowthRates.length; i++) {
        const element = pokemonAllGrowthRates[i].name;
        document.querySelector('.all-growth-rate-content-dd').innerHTML += `<dd class="all-growth-rate-content-dd">${element}</dd>`
    }
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

function evolutionLoadTheImageThroughTheNameFromTheChain() {
    // console.log("Name:", currentPokemonEvolution)
    const imgDefultName = document.querySelector('.img-defult-name-evolution')
    imgDefultName.src = defultPokemonName.sprites.other.home.front_default;
    
    const imgFirstName = document.querySelectorAll('.img-first-name-evolution')
        for (let i = 0; i < imgFirstName.length; i++) {
            imgFirstName[i].src = firstPokemonName.sprites.other.home.front_default;
        }
    
    const imgSecondName = document.querySelector('.img-second-name-evolution')
    imgSecondName.src = secondPokemonName.sprites.other.home.front_default;
    }

function evolutionLoadTheNameFromTheChain() {

    defultEvolutionPokemonName = currentPokemonEvolution.chain.species.name;
    defultName = defultEvolutionPokemonName;

    firstEvolutionPokemonName = currentPokemonEvolution.chain.evolves_to[0].species.name
    firstName = firstEvolutionPokemonName
    
    if(currentPokemonEvolution.chain.evolves_to[0].evolves_to == 0) {
        document.getElementById('dupa').classList.add('d-none')
    } else {
        document.getElementById('dupa').classList.remove('d-none')
        secondEvolutionPokemonName = currentPokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name;
        secondName = secondEvolutionPokemonName;
    }


    const defultNameEl = document.querySelector('.defult-name-evolution');
    defultNameEl.textContent = defultEvolutionPokemonName;

    const firstNameEl = document.querySelectorAll('.first-name-evolution');
        for (let i = 0; i < firstNameEl.length; i++) {
            firstNameEl[i].textContent = firstEvolutionPokemonName;;
        }

    const secondNameEl = document.querySelector('.second-name-evolution');
    secondNameEl.textContent = secondEvolutionPokemonName;
}
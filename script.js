let currentPokemon;
let currentPokemonSpecies;
let currentPokemonEvolution;
let currentPokemonName;
let pokemonGrowthRates;


let currentPokemonType;
let currentPokemonLanguages;
let currentPokemonStats;
let currentPokemonAbout;
let currentPokemonAbilities;
let currentPokemonMoves;
let currentFemaleMale; //Mrs or Mr
let currentPokemonEvolutionChain;
let currentPokemonGrowth;
let pokemonAllGrowthRates;

let namePokemon;
let defultEvolutionPokemonName
let firstEvolutionPokemonName;
let secondEvolutionPokemonName;

let temporaryId;

const uri = 'https://pokeapi.co/api/v2';
let id = 1;
let defultName;
let firstName;
let secondName;


async function loadPokemon() {
    currentPokemon = await sendRequest(`/pokemon/${id}`);
    
    currentPokemonType = currentPokemon.types;
    currentPokemonStats = currentPokemon.stats;
    currentPokemonMoves = currentPokemon.moves;
    console.log(currentPokemon)
    currentPokemonAbilities = currentPokemon.abilities;
    // Fetch Pokemon species data
    currentPokemonSpecies = await sendRequest(`/pokemon-species/${id}`)
    currentPokemonLanguages = currentPokemonSpecies.names; // Adjust this based on the structure of the response
    currentFemaleMale = currentPokemonSpecies.gender_rate
    currentPokemonGrowth = currentPokemonSpecies.growth_rate
    console.log(currentPokemonGrowth.name)

    pokemonGrowthRates = await sendRequest(`/growth-rate/`)
    pokemonAllGrowthRates = pokemonGrowthRates.results
    console.log(pokemonGrowthRates)

    //Path to evolution_chain.url
    currentPokemonEvolutionChain = currentPokemonSpecies.evolution_chain.url

    extractNumberFromUrl(currentPokemonEvolutionChain)

    // console.log(currentPokemonEvolutionChain)

    currentPokemonEvolution = await sendRequest(`/evolution-chain/${temporaryId}`)
    namePokemon = currentPokemonEvolution.chain.species.name

    evolutionLoadTheNameFromTheChain()

    defultPokemonName = await sendRequest(`/pokemon/${defultName}`);
    firstPokemonName = await sendRequest(`/pokemon/${firstName}`);
    secondPokemonName = await sendRequest(`/pokemon/${secondName}`);
    
    evolutionLoadTheImageThroughTheNameFromTheChain()
    // console.log('pokemon', currentPokemon);
    console.log('pokemon-species', currentPokemonSpecies);
    
    renderPokemonInfo();
}

async function sendRequest(endpoint) {
    const url = `${uri}${endpoint}`
    const response = await fetch(url)
    return await response.json();
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
    console.log("Name:", currentPokemonEvolution)
    const imgDefultName = document.querySelector('.img-defult-name-evolution')
    imgDefultName.src = defultPokemonName.sprites.other.home.front_default;
    
    console.log("First Name:", firstEvolutionPokemonName)

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

function renderPokemonInfo() {
    document.querySelector('.pokemon-top-section').style.backgroundColor = currentPokemonSpecies.color.name;

    nameOfPokemon()
    pokemonIdNumber()
    //Main picture from pokemon.
    const imgEl = document.querySelector('.img')
    imgEl.src = currentPokemon.sprites.other.home.front_default;
    pokemonFamaleOrMale()
    pokemonType()
    pokemonSpecies();
    pokemonHeight();
    pokemonWeight();
    pokemonAbilities();
    nameOfThePokemonInOtherLanguages();
    pokemonStats();
    pokemonBreeding();
    pokemonMoves();
    pokemonGrowth();
    function pokemonAllGrowths() {
        for (let i = 0; i < pokemonAllGrowthRates.length; i++) {
            const element = pokemonAllGrowthRates[i].name;
            document.querySelector('.growth-rate-list').innerHTML += `<dd class="all-growth-rate-content-dd">${element}</dd>`
        }
    }
    pokemonAllGrowths()
}

//Name of the pokemon.
function nameOfPokemon() {
    const nameEL = document.querySelector('.pokemon-name');
    nameEL.textContent = currentPokemon.name

}

//Number and Id of the pokemon.
function pokemonIdNumber() {
    const numberEl = document.querySelector('.pokemon-number')
    if (currentPokemon.id <= 9) {
        numberEl.textContent = `#000${currentPokemon.id}`
    } else if (currentPokemon.id <= 99) {
        numberEl.textContent = `#00${currentPokemon.id}`
    } else if (currentPokemon.id <= 9999) {
        numberEl.textContent = `#0${currentPokemon.id}`
    } else {
        numberEl.textContent = `#${currentPokemon.id}`
    }
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

//Species of pokemon
function pokemonSpecies() {
    let pokemonSpeciesArt = currentPokemonSpecies.genera[7].genus;
    document.querySelector('.species').innerHTML = pokemonSpeciesArt;
}

// A list of details showing types this Pokémon has.
function pokemonType() {
    const typeEl = document.querySelector('.pokemon-type');
    typeEl.innerHTML = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        typeEl.innerHTML += `<div class="pokemon-type-name">${element.type.name}</div>`;
    }
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

function pokemonBreeding() {
    const eggGroups = document.querySelector('.pokemon-egg-groups');
    const eggCycle = document.querySelector('.pokemon-egg-cycle');

    // eggCycle.innerHTML = currentPokemonSpecies.egg_groups[1].name;
    if (!currentPokemonSpecies.egg_groups[0] || !currentPokemonSpecies.egg_groups[0].name) {
        eggGroups.textContent = '---------';

    } else {
        eggGroups.innerHTML = currentPokemonSpecies.egg_groups[0].name;
    }

    if (!currentPokemonSpecies.egg_groups[1] || !currentPokemonSpecies.egg_groups[1].name) {
        eggCycle.textContent = '---------';
    } else {
        eggCycle.innerHTML = currentPokemonSpecies.egg_groups[1].name;
    }
}


// Name of the pokemon in other languages.
function nameOfThePokemonInOtherLanguages() {
    const languagesEl = document.querySelector('.pokemon-languages-content');
    languagesEl.innerHTML = '';

    for (let i = 0; i < currentPokemonLanguages.length; i++) {
        const element = currentPokemonLanguages[i];
        if (element.language.name == 'ja-Hrkt') {
        languagesEl.innerHTML += `<dt class="languages-dt">Japanese</dt>
                                <dd>${element.name}</dd>`;
        } else if (element.language.name == 'roomaji') {
            languagesEl.innerHTML += `<dt class="languages-dt">Japanese (Latin alphabet) </dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'ko') {
            languagesEl.innerHTML += `<dt class="languages-dt">Korean</dt>
                                    <dd>${element.name}</dd>`;
        }  else if (element.language.name == 'zh-Hant') {
            languagesEl.innerHTML += `<dt class="languages-dt">Chinese</dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'fr') {
            languagesEl.innerHTML += `<dt class="languages-dt">French</dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'de') {
            languagesEl.innerHTML += `<dt class="languages-dt">German</dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'es') {
            languagesEl.innerHTML += `<dt class="languages-dt">Spanish</dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'it') {
            languagesEl.innerHTML += `<dt class="languages-dt">Italian</dt>
                                    <dd>${element.name}</dd>`;
        } else if (element.language.name == 'en') {
            languagesEl.innerHTML += `<dt class="languages-dt">English</dt>
                                    <dd>${element.name}</dd>`;
        }
    }
}

//Die function show the statistik.
function pokemonStats() {
    const statsEl = document.querySelector('.pokemon-stats-content');
    statsEl.innerHTML = '';

    let totalSum = 0;

    for (let i = 0; i < currentPokemonStats.length; i++) {
        const element = currentPokemonStats[i];
        totalSum += element.base_stat

        if(element.stat.name === 'hp' || element.stat.name === 'defense' || element.stat.name === 'speed') {
        statsEl.innerHTML += /*html*/ `
                <div class="row my-3 d-flex align-items-center">
                  <div class="text-capitalize col-4 p-0 fw-bold pokemon-base-stats-name">${element.stat.name}</div>
                      <div class="col-1 p-0 fw-bold">${element.base_stat}
                      </div>
                  <div class="progress col-7 px-0">
                      <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" style="width: ${element.base_stat / 1.5}%" aria-valuemin="0" aria-valuemax="200">
                      </div>
                  </div>
                </div>`
        } else {
            statsEl.innerHTML += /*html*/ `
                <div class="row my-3 d-flex align-items-center">
                  <div class="text-capitalize col-4 p-0 fw-bold pokemon-base-stats-name">${element.stat.name}</div>
                      <div class="col-1 p-0 fw-bold">${element.base_stat}
                      </div>
                  <div class="progress col-7 px-0">
                      <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${element.base_stat / 1.5}%" aria-valuemin="0" aria-valuemax="200">
                      </div>
                  </div>
                </div>`
        }
    }
    statsEl.innerHTML += /*html*/ `
            <div class="row my-3 d-flex align-items-center">
                <div class="text-capitalize col-3 p-0 fw-bold pokemon-base-stats-name">Total</div>
                    <div class="col-1 p-0 fw-bold">${totalSum}
                    </div>
                <div class="progress col-7 px-0 ms-auto">
                    <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${totalSum / 7}%" aria-valuemin="0" aria-valuemax="700">
                    </div>
                </div>
            </div>`
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

function nextImageRight() {
    id++
    loadPokemon()
}

function lastImageLeft() {
    id--;
    loadPokemon()
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
    const sections = ['about-section', 'pokemon-languages', 'pokemon-stats', 'pokemon-evolution', 'pokemon-moves', 'growth-rate'];
    const navMenu = ['about-nav-item', 'languages-nav-item', 'stats-nav-item', 'evolution-nav-item', 'moves-nav-item', 'growth-rate-nav-item'];
    const navMenuA = ['about-nav-item-a', 'languages-nav-item-a', 'stats-nav-item-a', 'evolution-nav-item-a', 'moves-nav-item-a', 'growth-rate-nav-item-a'];

  
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
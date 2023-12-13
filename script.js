let currentPokemon;
let currentPokemonSpecies


let currentPokemonType;
let currentPokemonLanguages;
let currentPokemonStats;
let currentPokemonAbout;
let currentPokemonAbilities;
let currentPokemonMoves;
let currentFemaleMale; //Mrs or Mr


const uri = 'https://pokeapi.co/api/v2';
let id = 1

async function loadPokemon() {
    currentPokemon = await sendRequest(`/pokemon/${id}`);
    currentPokemonType = currentPokemon.types;
    currentPokemonStats = currentPokemon.stats;
    currentPokemonMoves = currentPokemon.moves;
    console.log(currentPokemonMoves)
    currentPokemonAbilities = currentPokemon.abilities;
    // Fetch Pokemon species data
    currentPokemonSpecies = await sendRequest(`/pokemon-species/${id}`)
    currentPokemonLanguages = currentPokemonSpecies.names; // Adjust this based on the structure of the response
    currentFemaleMale = currentPokemonSpecies.gender_rate
    
    console.log('Curren Pokemon', currentPokemon);
    console.log('pokemon-species', currentPokemonSpecies);
    
    renderPokemonInfo();
}

async function sendRequest(endpoint) {
    const url = `${uri}${endpoint}`
    const response = await fetch(url)
    return await response.json();
}


function renderPokemonInfo() {
    document.querySelector('.pokemon-top-section').style.backgroundColor = currentPokemonSpecies.color.name;

    const nameEL = document.querySelector('.pokemon-name')
    nameEL.textContent = currentPokemon.name
    
    pokemonIdNumber()
    
    //Main picture from pokemon.
    document.querySelector('.img').src = currentPokemon.sprites.other.home.front_default;

    const famalePrecent = (currentFemaleMale*100)/8;
    const malePrecent = (100 - famalePrecent);
    document.querySelector('.pokemon-gender-female').textContent = famalePrecent + '%';
    document.querySelector('.pokemon-gender-male').textContent = malePrecent + '%'

    pokemonType()

    //Species of pokemon
    let pokemonSpeciesArt = currentPokemonSpecies.genera[7].genus
    let pokemonSpeciesArtFirstWort = pokemonSpeciesArt
    document.querySelector('.species').innerHTML = pokemonSpeciesArtFirstWort

    pokemonHeight()
    pokemonWeight()
    pokemonAbilities()
    nameOfThePokemonInOtherLanguages()
    pokemonStats()
    
    document.querySelector('.pokemon-egg-groups').innerHTML = currentPokemonSpecies.egg_groups[0].name
    // document.querySelector('.pokemon-egg-cycle').innerHTML = currentPokemonSpecies.egg_groups[1].name
    
    const movesEl = document.querySelector(".pokemon-moves")
    movesEl.innerHTML = '';

    for (let i = 0; i < currentPokemonMoves.length; i++) {
        const element = currentPokemonMoves[i];
        movesEl.innerHTML += `<div class="pokemon-move-name">${element.move.name}</div>`
    }

}

//Number and Id of the pokemon.
function pokemonIdNumber() {
    const numberEl = document.querySelector('.pokemon-number')
    if (currentPokemon.id >= 0) {
        numberEl.textContent = `#000${currentPokemon.id}`
    } else if (currentPokemon.id >= 10) {
        numberEl.textContent = `#00${currentPokemon.id}`
    } else if (currentPokemon.id >= 100) {
        numberEl.textContent = `#0${currentPokemon.id}`
    } else if (currentPokemon.id >= 1000) {
        numberEl.textContent = `#0${currentPokemon.id}`
    }
}

//weight of the pokemon.
function pokemonHeight() {
    const pokemonWeight = (currentPokemon.weight)/10;
    document.querySelector('.pokemon-weight').innerHTML = pokemonWeight + ' kg';
}

//height of the pokemon.
function pokemonWeight() {
    const pokemonHeight = ((currentPokemon.height*10)/100).toFixed(2)
    document.querySelector('.pokemon-height').innerHTML = pokemonHeight + ' cm';
}

// A list of details showing types this Pokémon has.
function pokemonType() {
    const typeEl = document.querySelector('.pokemon-type');
    typeEl.innerHTML = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        typeEl.innerHTML += `<div>${element.type.name}</div>`;
    }
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

//Die function show statistik
function pokemonStats() {
    const statsEl = document.querySelector('.pokemon-stats');
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
                <div class="text-capitalize col-4 p-0 fw-bold pokemon-base-stats-name">Total</div>
                    <div class="col-1 p-0 fw-bold">${totalSum}
                    </div>
                <div class="progress col-7 px-0">
                    <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${totalSum / 7}%" aria-valuemin="0" aria-valuemax="700">
                    </div>
                </div>
            </div>`
}


function nextImageRight() {
    id++
    loadPokemon()
}

function lastImageLeft() {
    id--
    loadPokemon()
}
//##2 load-single-pokemon
function pokemonBackGroundColorBig(BackGroundColor){   
    if (BackGroundColor == "green") {
        document.querySelector('.pokemon-top-section').style.backgroundColor = 'rgb(70, 209, 178)';
    } else if (BackGroundColor == "red") {
        document.querySelector('.pokemon-top-section').style.backgroundColor = 'rgb(249,103,103)';
    } else if (BackGroundColor == "blue") {
        document.querySelector('.pokemon-top-section').style.backgroundColor = 'rgb(119,190,254)';
    } else if (BackGroundColor == "white") {
        document.querySelector('.pokemon-top-section').style.backgroundColor = 'rgb(160, 181, 54)';
    } else if (BackGroundColor == "yellow") {
        document.querySelector('.pokemon-top-section').style.backgroundColor = 'rgb(207, 152, 58)';
    } else {
        document.querySelector('.pokemon-top-section').style.backgroundColor = currentColor;
    }
}

//##3 load-single-pokemon
function nameOfPokemonBig(pokemon) {
    document.querySelector('.pokemon-name-big').textContent = pokemon
}

//##4  A list of details showing types this Pokémon has.
function pokemonTypeBig(currentPokemonType) {
    const typeEl = document.querySelector('.pokemon-type');
    typeEl.innerHTML = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        typeEl.innerHTML += `<div class="pokemon-type-name rounded-3 px-2 py-1">${element.type.name}</div>`;
    }
}

//##5 load-single-pokemon
function pokemonIdNumberBig(pokemonId) {
    const numberEl = document.querySelector('.pokemon-number-big')
        if (pokemonId <= 9) {
            numberEl.textContent = `#000${pokemonId}`
        } else if (pokemonId <= 99) {
            numberEl.textContent = `#00${pokemonId}`
        } else if (pokemonId <= 9999) {
            numberEl.textContent = `#0${pokemonId}`
        } else {
            numberEl.textContent = `#${pokemonId}`
        }
}

//##6 load-single-pokemon
function pokemonMainPictureBig(PokemonImg) {
    document.querySelector(`.img`).src = PokemonImg;
}

//##7 load-single-pokemon
function pokemonBreeding(eggGroupsCycle) {
    const eggGroups = document.querySelector('.pokemon-egg-groups');
    const eggCycle = document.querySelector('.pokemon-egg-cycle');

    // eggCycle.innerHTML = currentPokemonSpecies.egg_groups[1].name;
    if (!eggGroupsCycle[0] || !eggGroupsCycle[0].name) {
        eggGroups.textContent = '---------';

    } else {
        eggGroups.innerHTML = eggGroupsCycle[0].name;
    }

    if (!eggGroupsCycle[1] || !eggGroupsCycle[1].name) {
        eggCycle.textContent = '---------';
    } else {
        eggCycle.innerHTML = eggGroupsCycle[1].name;
    }
}

//##8 Name of the pokemon in other languages.
function nameOfThePokemonInOtherLanguages(pokemonSpeciesNames) {
    const languagesEl = document.querySelector('.pokemon-languages-content');
    languagesEl.innerHTML = '';

    for (let i = 0; i < pokemonSpeciesNames.length; i++) {
        const element = pokemonSpeciesNames[i];
        if (element.language.name == 'ja-Hrkt') {
        languagesEl.innerHTML += `<dt class="languages-dt">Japanese</dt>
                                <dd>${element.name}</dd>`;
        } else if (element.language.name== 'roomaji') {
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

//##9 Die function show the statistik.
function pokemonStats(currentPokemonStats) {
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

//##10 Species of pokemon
function pokemonSpeciesGenera(pokemonSpeciesGenera) {
    const pokemonSpeciesArt = pokemonSpeciesGenera[7].genus;
    document.querySelector('.species').innerHTML = pokemonSpeciesArt;
}

//##11 Species of pokemon
function pokemonAbilities(pokemonAbilities) {
    const abilitiesEl = document.querySelector(".pokemon-abilities")
    abilitiesEl.textContent = '';

    for (let i = 0; i < pokemonAbilities.length; i++) {
        const element = pokemonAbilities[i];
        if (i > 0) {
            abilitiesEl.textContent += ', ';
        }
        abilitiesEl.textContent += `${element.ability.name}`
    }
}

//##12 Height of the pokemon calculation.
function calculatePokemonHeight(pokemonHeight) {
    const pokemonHeightResult = ((pokemonHeight*10)/100).toFixed(2)
    return pokemonHeightResult + ' cm'
}

//##12 Height of the pokemon display.
function displayPokemonHeight(pokemonHeight) {
    const result = calculatePokemonHeight(pokemonHeight)
    document.querySelector('.pokemon-height').textContent = result;
}

//##13 Weight of the pokemon calculation.
function calculatePokemonWeight(pokemonWeight) {
    const pokemonWeightResult = (pokemonWeight)/10;
    return pokemonWeightResult
}

//##13 Weight of the pokemon display.
function displayPokemonWeight(pokemonWeight) {
    const result = calculatePokemonWeight(pokemonWeight)
    document.querySelector('.pokemon-weight').textContent = result  + ' kg';
}

//##14 Female or Male
function calculateFemaleMale(currentFemaleMale) {
    const femalePercent = (currentFemaleMale*100)/8;
    const malePercent = 100 - femalePercent;
    return {
        female: femalePercent,
        male: malePercent
    }
}

//##14 Female or Male
function displayPokemonFemaleMale(currentFemaleMale) {
    const result = calculateFemaleMale(currentFemaleMale)
    document.querySelector('.pokemon-gender-female').textContent = result.female + ' %';
    document.querySelector('.pokemon-gender-male').textContent = result.male + ' %'
}

//##15 Moves
function pokemonMoves(pokemonMoveName) {
    const movesEl = document.querySelector(".pokemon-moves-content")
    movesEl.innerHTML = '';

    for (let i = 0; i < pokemonMoveName.length; i++) {
        const element = pokemonMoveName[i];
        movesEl.innerHTML += `<div class="pokemon-move-name">${element.move.name}</div>`
    }
}

//##16 Growth Rate
function pokemonGrowth(growthRate) {
    document.querySelector('.growth-rate-content-dd').innerHTML = `${growthRate}`
}

//##17 All Growth Rate
function pokemonAllGrowthRates(pokemonAllRatesList) {
    const allGrowthRateContentDdEl = document.querySelector('.all-growth-rate-content-dd');
    allGrowthRateContentDdEl.innerHTML = '';

    for (let i = 0; i < pokemonAllRatesList.length; i++) {
        const element = pokemonAllRatesList[i].name;
        allGrowthRateContentDdEl.innerHTML += `<dd class="all-growth-rate-content-dd">${element}</dd>`
    }
}
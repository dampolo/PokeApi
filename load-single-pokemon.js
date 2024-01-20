//##2 load-single-pokemon
function pokemonBackGroundColorBig(backGroundColor){   
    const colorMap = {
        'green': 'pokemon-green',
        'red': 'pokemon-red',
        'blue': 'pokemon-blue',
        'white': 'pokemon-white',
        'yellow': 'pokemon-yellow',
        'brown': 'pokemon-brown',
        'purple': 'pokemon-purple',
        'black': 'pokemon-cream',
        'pink': 'pokemon-pink',
        'gray': 'pokemon-gray'
    }
    
    const color = colorMap[backGroundColor] ?? 'pokemon-defult';

    const element = document.querySelector('.pokemon-top-section');
    element.className = 'pokemon-top-section';
    document.querySelector('.pokemon-top-section').classList.add(color)
}

//##3 load-single-pokemon
function nameOfPokemonBig(pokemon) {
    const nodeList = document.querySelectorAll('.pokemon-name-big')
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = pokemon;
    }
}

//##4  A list of details showing types this Pokémon has.
function pokemonTypeBig(currentPokemonType) {
    types = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        types += `<div class="pokemon-type-name rounded-3 px-2 py-1">${element.type.name}</div>`;
    }
    document.querySelector('.pokemon-type-big').innerHTML = types
}

//##5 load-single-pokemon
function pokemonIdNumberBig(pokemonId) {
    document.querySelector('.pokemon-number-big').textContent = `#${pokemonId.toString().padStart(5, '0')}`;
}

// ##6 load-single-pokemon
function pokemonMainPictureBig(pokemonImg) {
    const imgElement = document.querySelector('.img');
    imgElement.src = pokemonImg.other.home.front_default ?? pokemonImg.other.official-artwork.front_default;
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
    let languages = '';

    const languageMap = {
        'ja-Hrkt': 'Japanese',
        'roomaji': 'Japanese (Latin alphabet)',
        'ko': 'Korean',
        'zh-Hant': 'Chinese',
        'fr': 'French',
        'de': 'German',
        'es': 'Spanish',
        'it': 'Italian',
        'en': 'English'
    };

    for (let i = 0; i < pokemonSpeciesNames.length; i++) {
        const element = pokemonSpeciesNames[i];
        const languageName = languageMap[element.language.name];
        if (languageName) {
            languages += `<dt class="languages-dt">${languageName}</dt>
                                    <dd>${element.name}</dd>`;
        } else {
            languages += `<dt class="languages-dt">${languageName}</dt>
                            <dd>This pokemon do not have name in this language.</dd>`;
        }
        document.querySelector('.pokemon-languages-content').innerHTML = languages;
    }
}

//##9 Die function show the statistik.
function pokemonStats(currentPokemonStats) {
    const statsEl = document.querySelector('.pokemon-stats-content');
    statsEl.innerHTML = '';

    let totalSum = 0;

    for (let i = 0; i < currentPokemonStats.length; i++) {
        const element = currentPokemonStats[i];
        totalSum += element.base_stat;

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
    const englishGenera = pokemonSpeciesGenera.find(element => element.language.name === 'en' )
    const species = englishGenera ? englishGenera.genus : '---------';

    document.querySelector('.species').textContent = species
}

//##11 Species of pokemon
function pokemonAbilities(pokemonAbilities) {
    const abilitiesEl = document.querySelector(".pokemon-abilities");
    abilitiesEl.textContent = '';

    const abilitiesNames = pokemonAbilities.map(element => element.ability.name);
    abilitiesEl.textContent = abilitiesNames.join(', ');
}

//##12 Height of the pokemon calculation.
function calculatePokemonHeight(pokemonHeight) {
    const pokemonHeightResult = ((pokemonHeight*10)/100).toFixed(2);
    return pokemonHeightResult;
}

//##12 Height of the pokemon calculation.
function formatNumberWithCommaHeight(number) {
    return Intl.NumberFormat('de-IN').format(number);
}

//##12 Height of the pokemon display.
function displayPokemonHeight(pokemonHeight) {
    const result = calculatePokemonHeight(pokemonHeight);
    const resultWithComma = formatNumberWithCommaHeight(result);
    document.querySelector('.pokemon-height-cm').textContent = '(' + resultWithComma + ' cm)';
}

//##13 Weight of the pokemon calculation.
function calculatePokemonWeight(pokemonWeight) {
    const pokemonWeightResult = (pokemonWeight)/10;
    return pokemonWeightResult;
}

//##13 Weight of the pokemon display.
function formatNumberWithCommaWeight(number) {
    return Intl.NumberFormat('de-IN').format(number);
}

//##13 Weight of the pokemon display.
function displayPokemonWeight(pokemonWeight) {
    const result = calculatePokemonWeight(pokemonWeight);
    const resultWithComma = formatNumberWithCommaWeight(result);
    document.querySelector('.pokemon-weight-kg').textContent = '(' + resultWithComma + ' kg)';
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
function formatNumberWithCommaFemalMale(result) {
    return {
        female: Intl.NumberFormat('de-IN').format(result.female),
        male: Intl.NumberFormat('de-IN').format(result.male)
    };
}

//##14 Female or Male
function displayPokemonFemaleMale(currentFemaleMale) {
    const result = calculateFemaleMale(currentFemaleMale);
    const resultWithComma = formatNumberWithCommaFemalMale(result)
    document.querySelector('.pokemon-gender-female').textContent = resultWithComma.female + ' %';
    document.querySelector('.pokemon-gender-male').textContent = resultWithComma.male + ' %';
}

//##15 Moves
function pokemonMoves(pokemonMoveName) {
    let moves = '';
    
    for (let i = 0; i < pokemonMoveName.length; i++) {
        const element = pokemonMoveName[i];
        moves += `<div class="pokemon-move-name">${element.move.name}</div>`;
    }
    document.querySelector(".pokemon-moves-content").innerHTML = moves;
}

//##16 Growth Rate
function pokemonGrowth(growthRate) {
    document.querySelector('.growth-rate-content-dd').innerHTML = `${growthRate}`;
}

//##17 All Growth Rate
function pokemonAllGrowthRates(pokemonAllRatesList) {
    let allGrowthRateContentDd = '';

    for (let i = 0; i < pokemonAllRatesList.length; i++) {
        const element = pokemonAllRatesList[i].name;
        allGrowthRateContentDd += `<dd class="all-growth-rate-content-dd">${element}</dd>`;
    }
    document.querySelector('.all-growth-rate-content-dd').innerHTML = allGrowthRateContentDd;
}

// ##18 - 1 part load-single-pokemon.js
function extractNumberFromUrl(url) {
    // Match the last sequence of digits in the URL
    const match = url.match(/\/(\d+)\/$/);
    // Check if there is a match
    if (match && match[1]) {
        // Extracted number
        const number = parseInt(match[1], 10);
        return number;
    } else {
        // Return an error or handle the case where no number is found
        return null;
    }
}

// ##18 - 2 part load-single-pokemon.js
function evolutionLoadTheNameFromTheChain(defultName, firstName, secondName) {
    const defultNameEl = document.querySelector('.defult-name-evolution');
    defultNameEl.textContent = defultName;

    const firstNameEl = document.querySelectorAll('.first-name-evolution');
        for (let i = 0; i < firstNameEl.length; i++) {
            firstNameEl[i].textContent = firstName;
        }

    const secondNameEl = document.querySelector('.second-name-evolution');
    secondNameEl.textContent = secondName;
}

// ##18 - 3 part load-single-pokemon.js
function evolutionLoadTheImageThroughTheNameFromTheChainOneEvolution(defultPokemonImg, firstPokemonImg) {
    document.querySelector('.img-defult-name-evolution').src = defultPokemonImg.sprites.other.home.front_default;

    const imgFirstName = document.querySelectorAll('.img-first-name-evolution')
        for (let i = 0; i < imgFirstName.length; i++) {
            imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
        }
}

// ##18 - 4 part load-single-pokemon.js
function evolutionLoadTheImageThroughTheNameFromTheChainTwoEvolution(defultPokemonImg, firstPokemonImg, secondPokemonImg ) {
    document.querySelector('.img-defult-name-evolution').src = defultPokemonImg.sprites.other.home.front_default;
    
    const imgFirstName = document.querySelectorAll('.img-first-name-evolution')
        for (let i = 0; i < imgFirstName.length; i++) {
            imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
        }
        document.querySelector('.img-second-name-evolution').src = secondPokemonImg.sprites.other.home.front_default;
}

//##19 load-single-pokemon.js
function allPictures(images) {
    const parentElement = document.querySelector(".other-pictures-list");
    
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    
    for (let i = 0; i < imageTypes.length; i++) {
        const node = document.createElement("img")
        if((getImageSource(images, imageTypes[i])) == null) {
            node.classList.add("d-none");
        } else {
            node.src = getImageSource(images, imageTypes[i]);
            node.classList.add("all-picture");
            node.classList.add("img-fluid");
            node.classList.add("w-50");
            document.querySelector(".other-pictures-list").appendChild(node);
        }
    }
    amountOfPictures(images)
}

//##19 load-single-pokemon.js
function getImageSource(sprites, type) {
    const keys = type.split('.');
    let result = sprites;
    for (let i = 0; i < keys.length; i++) {
        result = result[keys[i]];
    }
    return result;
    }

//##19 part 2 load-single-pokemon.js
function amountOfPictures(images) {
    let numberOfImages = 0;

    for (let i = 0; i < imageTypes.length; i++) {
        const imageSource = getImageSource(images, imageTypes[i]);
        
        if (imageSource !== null) {
            numberOfImages++;
        }
        document.querySelector('.amount-of-pictures').textContent = numberOfImages;
    }
}

//##20 load-single-pokemon.js
function descriptionOfThePokemon(languages) {
    const descriptionEnglish = document.querySelector('.description-section-english');
    const descriptionGerman = document.querySelector('.description-section-german');
    const descriptionSpanish = document.querySelector('.description-section-spanish');
    const descriptionFrench = document.querySelector('.description-section-french');
    const descriptionItalian = document.querySelector('.description-section-italian');
    const descriptionJapan = document.querySelector('.description-section-japan');
    const descriptionKorean = document.querySelector('.description-section-korean');
    const descriptionChina = document.querySelector('.description-section-china');

    if(languages.length === 0) {
        descriptionEnglish.textContent = 'There is no description in this language';
        descriptionGerman.textContent = 'There is no description in this language';
        descriptionSpanish.textContent = 'There is no description in this language';
        descriptionFrench.textContent = 'There is no description in this language';
        descriptionItalian.textContent = 'There is no description in this language';
        descriptionJapan.textContent = 'There is no description in this language';
        descriptionKorean.textContent = 'There is no description in this language';
        descriptionChina.textContent = 'There is no description in this language';

    } else {
        for (let i = 0; i < languages.length; i++) {
            const element = languages[i];
                if(element.language.name == 'en') {
                    descriptionEnglish.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'de') {
                    descriptionGerman.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'es') {
                    descriptionSpanish.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'fr') {
                    descriptionFrench.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'it') {
                    descriptionItalian.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'ja') {
                    descriptionJapan.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'ko') {
                    descriptionKorean.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == 'zh-Hant') {
                    descriptionChina.innerHTML += `<span>${element.flavor_text}</span>`;
                } else if (element.language.name == '') {
                    descriptionChina.textContent += 'This languages is not available';
                }
            }
    }
}

//##21 load-single-pokemon.js
function calculatePokemonHeightFett(pokemonHeight) {
    // 1 inch = 2.54 cm
    // 1 foot = 12 inches
    // Convert height to inches
    const heightInInches = (pokemonHeight*10) / 2.54;

    // Calculate feet and inches
    const feet = Math.round(heightInInches / 12);
    const inches = (heightInInches % 12).toFixed(1);
    const inchesNumber = parseFloat(inches);

    return { feet, inchesNumber };
}

//##21 load-single-pokemon.js
function displayPokemonHeightFeet(pokemonHeight) {
    const result = calculatePokemonHeightFett(pokemonHeight);
    document.querySelector('.pokemon-height-feet').textContent = result.feet + "'" + result.inchesNumber + '"';

}

//##22 part1 - load-single-pokemon.js
function calculatePokemonWeightIbs(pokemonWeight) {
    const pounds = ((pokemonWeight * 2.20462)/10).toFixed(1);
    return pounds;
}

//##22 part2 - load-single-pokemon.js
function displayPokemonWeightIbs(pokemonWeight) {
    const result = calculatePokemonWeightIbs(pokemonWeight);
    document.querySelector('.pokemon-weight-ibs').textContent = result  + ' Ibs ';
}

//##23 - load-single-pokemon.js
function addNumberToNextImageRight(id) {
    document.getElementById('imageRight').setAttribute('onclick', `nextImageRight(${id})`);
  }

//##24 - load-single-pokemon.js
function addNumberToNextImageLeft(id) {
    document.getElementById('imageLeft').setAttribute('onclick', `nextImageLeft(${id})`);
}


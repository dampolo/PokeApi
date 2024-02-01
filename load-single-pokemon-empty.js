
function loadPokemonInfoRemove(id) {
    nameOfPokemonBigEmpty(id);
    pokemonTypeBigEmpty(id);
    pokemonIdNumberBigEmpty(id);
    allPicturesRemove(id);
    pokemonMainPictureBigRemove(id);
    pokemonBreedingEmpty(id);
    nameOfThePokemonInOtherLanguagesEmpty(id);
    pokemonStatsEmpty(id);
    pokemonSpeciesGeneraEmpty(id);
    pokemonAbilitiesEmpty(id);
    displayPokemonHeightEmpty(id);
    displayPokemonWeightEmpty(id)
    displayPokemonFemaleMaleEmpty(id)
    pokemonMovesEmpty(id)
    pokemonGrowthEmpty(id)
    pokemonAllGrowthRatesEmpty(id)
    descriptionOfThePokemoEmpty(id)
    displayPokemonHeightFeetEmpty(id)
    displayPokemonWeightIbsEmpty(id)
}

    
function nameOfPokemonBigEmpty(id) {
    const nodeList = document.querySelectorAll(
      `.pokemon-name-big[data-id="${id}"]`
    );
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].textContent = '';
    }
  }
  
function pokemonTypeBigEmpty(id) {
document.querySelector(`.pokemon-type-big[data-id="${id}"]`).innerHTML = '';
}

function pokemonIdNumberBigEmpty(id) {
document.querySelector(
    `.pokemon-number-big[data-id="${id}"]`).textContent = '';
}

function allPicturesRemove(id) {
const parentElement = document.querySelector(
    `.other-pictures-list[data-id="${id}"]`
);

while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}
}

function pokemonMainPictureBigRemove(id) {
const imgElement = document.querySelector(`.img[data-id="${id}"]`);
imgElement.src = ''
}

function pokemonBreedingEmpty(id) {
    document.querySelector(`.pokemon-egg-groups[data-id="${id}"]`).innerHTML = '';
    document.querySelector(`.pokemon-egg-cycle[data-id="${id}"]`).innerHTML = '';
  }

function nameOfThePokemonInOtherLanguagesEmpty(id) {
    document.querySelector(`.pokemon-languages-content[data-id="${id}"]`).innerHTML = '';
  }

function pokemonStatsEmpty(id) {
    document.querySelector(`.pokemon-stats-content[data-id="${id}"]`).innerHTML = '';
}

function pokemonSpeciesGeneraEmpty(id) {
    document.querySelector(`.species[data-id="${id}"]`).textContent = '';
  }

function pokemonAbilitiesEmpty(id) {
    document.querySelector(`.pokemon-abilities[data-id="${id}"]`).textContent = '';
}

function displayPokemonHeightEmpty(id) {
    document.querySelector(`.pokemon-height-cm[data-id="${id}"]`).textContent = '';
  }

function displayPokemonWeightEmpty(id) {
    document.querySelector(`.pokemon-weight-kg[data-id="${id}"]`).textContent = '';
}

function displayPokemonFemaleMaleEmpty(id) {
    document.querySelector(`.pokemon-gender-female[data-id="${id}"]`).textContent = '';
    document.querySelector(`.pokemon-gender-male[data-id="${id}"]`).textContent = '';
  }

function pokemonMovesEmpty(id) {
    document.querySelector(`.pokemon-moves-content[data-id="${id}"]`).innerHTML = '';
}

function pokemonGrowthEmpty(id) {
    document.querySelector(`.growth-rate-content-dd[data-id="${id}"]`).innerHTML = '';
  }

function pokemonAllGrowthRatesEmpty(id) {
    document.querySelector(`.all-growth-rate-content-dd[data-id="${id}"]`).innerHTML = '';
}


function descriptionOfThePokemoEmpty(id) {
    document.querySelector(`.description-section-english[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-german[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-spanish[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-french[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-italian[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-japan[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-korean[data-id="${id}"]`).textContent = '';
    document.querySelector(`.description-section-china[data-id="${id}"]`).textContent = '';
}

function displayPokemonHeightFeetEmpty(id) {
    document.querySelector(`.pokemon-height-feet[data-id="${id}"]`).textContent = '';
  }

function displayPokemonWeightIbsEmpty(id) {
    document.querySelector(`.pokemon-weight-ibs[data-id="${id}"]`).textContent = '';
}
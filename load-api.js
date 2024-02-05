const uri = 'https://pokeapi.co/api/v2';

async function sendRequest(endpoint) {
    const url = `${uri}${endpoint}`;
    
    try {
        const response = await fetch(url);
        removePreLoader();
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error occurred during the request:', error);
        // You might want to handle the error appropriately, e.g., show an error message
        throw error; // Re-throwing the error to let the caller handle it
    }
}

async function createNewPokemonApi(id){
    const pokemon = await sendRequest(`/pokemon/${id}`);
    return pokemon;
    }

async function createNewPokemonSpeciesApi(id){
    const pokemonSpecies = await sendRequest(`/pokemon-species/${id}`);
    return pokemonSpecies;
    }

async function createAllPokemonGrowthRatesApi() {
    const pokemonGrowthRates = await sendRequest(`/growth-rate/`);
    return pokemonGrowthRates.results;
}

async function searchPokemonApi() {
    const pokemonSearch = await sendRequest(`/pokemon-species?limit=11000`);
    return pokemonSearch.results;
}

// ##18
async function mainEvolutionAPI(id) {
    const pokemonSpecies = await sendRequest(`/pokemon-species/${id}`);
    const currentPokemonEvolutionChain = pokemonSpecies.evolution_chain.url;
    
    // ##18 - 1 part load-single-pokemon.js
    const chainNumber = extractNumberFromUrl(currentPokemonEvolutionChain);
    const currentPokemonEvolution = await sendRequest(`/evolution-chain/${chainNumber}`);
    // console.log('Evolution:', currentPokemonEvolution);

    const defultName = currentPokemonEvolution.chain.species.name;
    let firstName = '';
    let secondName = '';

    if (currentPokemonEvolution.chain.evolves_to == 0) {
        document.querySelector(`.evolution-section-first[data-id="${id}"]`).classList.add('d-none');
        document.querySelector(`.evolution-section-second[data-id="${id}"]`).classList.add('d-none');

    } else if (currentPokemonEvolution.chain.evolves_to[0].evolves_to == 0) {
        firstName = currentPokemonEvolution.chain.evolves_to[0].species.name;
        document.querySelector(`.evolution-section-second[data-id="${id}"]`).classList.add('d-none');
    } else {
        document.querySelector(`.evolution-section-second[data-id="${id}"]`).classList.remove('d-none');
        firstName = currentPokemonEvolution.chain.evolves_to[0].species.name;
        secondName = currentPokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name;
    }

    // ##18 - 2 part load-single-pokemon.js
    evolutionLoadTheNameFromTheChain(id, defultName, firstName, secondName);
    await loadPokemonImages(id, defultName, firstName, secondName);
}

async function loadPokemonImages(id, defultName, firstName, secondName) {
    const defultPokemonImg = await sendRequest(`/pokemon/${defultName}`);
    const firstPokemonImg = await sendRequest(`/pokemon/${firstName}`);

    if (firstName == '') {
        document.querySelector(`.no-evolution[data-id="${id}"]`).textContent = 'This pokemon do not have evolution';
    } else if (secondName == '') {
        // ##18 - 3 part load-single-pokemon.js
        evolutionLoadTheImageThroughTheNameFromTheChainOneEvolution(id, defultPokemonImg, firstPokemonImg);
    } else {
        const secondPokemonImg = await sendRequest(`/pokemon/${secondName}`);
        // ##18 - 4 part load-single-pokemon.js
        evolutionLoadTheImageThroughTheNameFromTheChainTwoEvolution(id, defultPokemonImg, firstPokemonImg, secondPokemonImg);
    }
}

async function loadPokemons(id){
    const pokemon = await createNewPokemonApi(id);
    const pokemonSpecies = await createNewPokemonSpeciesApi(id);
    
    nameOfPokemon(id, pokemon.name); //##3 load-all-pokemons.js
    pokemonType(id, pokemon.types); //##4 load-all-pokemons.js
    pokemonIdNumber(id, pokemon.id);  //##5 load-all-pokemons.js

    pokemonMainPictureSmall(id, pokemon.sprites);  //##6 load-all-pokemons.js
    pokemonBackGroundColorSmall(id, pokemonSpecies.color.name); //##2 load-all-pokemons.js
}

async function loadPokemonInfo(id){
    const pokemon = await createNewPokemonApi(id);
    // console.log('1pokemon', pokemon);
    const pokemonSpecies = await createNewPokemonSpeciesApi(id);
    // console.log('2pokemonSpecies', pokemonSpecies)
    console.log('Description', pokemonSpecies.flavor_text_entries)

    
    const pokemonAllRatesList = await createAllPokemonGrowthRatesApi();
    // console.log('Rates', pokemonAllRatesList)
    
    nameOfPokemonBig(id, pokemon.name); //##3 load-single-pokemon.js
    pokemonTypeBig(id, pokemon.types); //##4 load-single-pokemon.js
    pokemonIdNumberBig(id, pokemon.id);  //##5 load-single-pokemon.js
    pokemonMainPictureBig(id, pokemon.sprites);  //##6 load-single-pokemon.js
    pokemonStats(id, pokemon.stats); //##9 load-single-pokemon.js
    pokemonAbilities(id, pokemon.abilities); //##11 load-single-pokemon.js
    displayPokemonHeight(id, pokemon.height); //##12 load-single-pokemon.js
    displayPokemonWeight(id, pokemon.weight); //##13 load-single-pokemon.js
    pokemonMoves(id, pokemon.moves); //##15 load-single-pokemon.js
    displayPokemonHeightFeet(id, pokemon.height); //##21 load-single-pokemon.js
    displayPokemonWeightIbs(id, pokemon.weight); //##22 load-single-pokemon.js
    
    pokemonBackGroundColorBig(id, pokemonSpecies.color.name); //##2 load-single-pokemon.js
    pokemonBreeding(id, pokemonSpecies.egg_groups); //##7 load-single-pokemon.js
    nameOfThePokemonInOtherLanguages(id, pokemonSpecies.names); //##8 load-single-pokemon.js
    pokemonSpeciesGenera(id, pokemonSpecies.genera); //##10 load-single-pokemon.js
    displayPokemonFemaleMale(id, pokemonSpecies.gender_rate); //##14 load-single-pokemon.js
    pokemonGrowth(id, pokemonSpecies.growth_rate.name); //##16 load-single-pokemon.js
    pokemonAllGrowthRates(id, pokemonAllRatesList); //##17 load-single-pokemon.js
    allPictures(id, pokemon.sprites); //##19 load-single-pokemon.js
    descriptionOfThePokemon(id, pokemonSpecies.flavor_text_entries); //##20 load-single-pokemon.js
    mainEvolutionAPI(id); //#18 load-api.js
}

async function loadPokemonAnimation(id){
    const pokemon = await createNewPokemonApi(id);
    flyingPokemons(pokemon)
}

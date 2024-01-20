const uri = 'https://pokeapi.co/api/v2';

async function sendRequest(endpoint) {
    const url = `${uri}${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function createNewPokemonApi(id){
    const pokemon = await sendRequest(`/pokemon/${id}`);
    // console.log(pokemon)
    return pokemon;
    }

async function createNewPokemonSpeciesApi(id){
    const pokemonSpecies = await sendRequest(`/pokemon-species/${id}`);
    // console.log(pokemonSpecies)
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
        document.querySelector('.evolution-section-first').classList.add('d-none');
        document.querySelector('.evolution-section-second').classList.add('d-none');

    } else if (currentPokemonEvolution.chain.evolves_to[0].evolves_to == 0) {
        firstName = currentPokemonEvolution.chain.evolves_to[0].species.name;
        document.querySelector('.evolution-section-second').classList.add('d-none');
    } else {
        document.querySelector('.evolution-section-second').classList.remove('d-none');
        firstName = currentPokemonEvolution.chain.evolves_to[0].species.name;
        secondName = currentPokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name;
    }

    // ##18 - 2 part load-single-pokemon.js
    evolutionLoadTheNameFromTheChain(defultName, firstName, secondName);
    await loadPokemonImages(defultName, firstName, secondName);
}

async function loadPokemonImages(defultName, firstName, secondName) {
    const defultPokemonImg = await sendRequest(`/pokemon/${defultName}`);
    const firstPokemonImg = await sendRequest(`/pokemon/${firstName}`);

    if (firstName == '') {
        document.querySelector('.no-evolution').textContent = 'This pokemon do not have evolution';
    } else if (secondName == '') {
        // ##18 - 3 part load-single-pokemon.js
        evolutionLoadTheImageThroughTheNameFromTheChainOneEvolution(defultPokemonImg, firstPokemonImg);
    } else {
        const secondPokemonImg = await sendRequest(`/pokemon/${secondName}`);
        // ##18 - 4 part load-single-pokemon.js
        evolutionLoadTheImageThroughTheNameFromTheChainTwoEvolution(defultPokemonImg, firstPokemonImg, secondPokemonImg);
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
    // console.log('Description', pokemonSpecies.flavor_text_entries)

    
    const pokemonAllRatesList = await createAllPokemonGrowthRatesApi();
    // console.log('Rates', pokemonAllRatesList)
    mainEvolutionAPI(id); //#18 load-api.js
    
    nameOfPokemonBig(pokemon.name); //##3 load-single-pokemon.js
    pokemonTypeBig(pokemon.types); //##4 load-single-pokemon.js
    pokemonIdNumberBig(pokemon.id);  //##5 load-single-pokemon.js
    pokemonMainPictureBig(pokemon.sprites);  //##6 load-single-pokemon.js
    pokemonStats(pokemon.stats); //##9 load-single-pokemon.js
    pokemonAbilities(pokemon.abilities); //##11 load-single-pokemon.js
    displayPokemonHeight(pokemon.height); //##12 load-single-pokemon.js
    displayPokemonWeight(pokemon.weight); //##13 load-single-pokemon.js
    pokemonMoves(pokemon.moves); //##15 load-single-pokemon.js
    displayPokemonHeightFeet(pokemon.height); //##21 load-single-pokemon.js
    displayPokemonWeightIbs(pokemon.weight); //##22 load-single-pokemon.js
    addNumberToNextImageRight(pokemon.id); //##23 load-single-pokemon.js
    addNumberToNextImageLeft(pokemon.id); //##23 load-single-pokemon.js

    pokemonBackGroundColorBig(pokemonSpecies.color.name); //##2 load-single-pokemon.js
    pokemonBreeding(pokemonSpecies.egg_groups); //##7 load-single-pokemon.js
    nameOfThePokemonInOtherLanguages(pokemonSpecies.names); //##8 load-single-pokemon.js
    pokemonSpeciesGenera(pokemonSpecies.genera); //##10 load-single-pokemon.js
    displayPokemonFemaleMale(pokemonSpecies.gender_rate); //##14 load-single-pokemon.js
    pokemonGrowth(pokemonSpecies.growth_rate.name); //##16 load-single-pokemon.js
    pokemonAllGrowthRates(pokemonAllRatesList); //##17 load-single-pokemon.js
    allPictures(pokemon.sprites); //##19 load-single-pokemon.js
    descriptionOfThePokemon(pokemonSpecies.flavor_text_entries); //##20 load-single-pokemon.js
}



const uri = 'https://pokeapi.co/api/v2';

async function sendRequest(endpoint) {
    const url = `${uri}${endpoint}`
    const response = await fetch(url)
    return await response.json();
}

async function createNewPokemonApi(id){
    const pokemon = await sendRequest(`/pokemon/${id}`);
    return pokemon;
    }

async function createNewPokemonSpeciesApi(id){
    const pokemonSpecies = await sendRequest(`/pokemon-species/${id}`);
    return pokemonSpecies;
    }


async function loadPokemons(id){
    const pokemon = await createNewPokemonApi(id);
    const pokemonSpecies = await createNewPokemonSpeciesApi(id);
    
    nameOfPokemon(id, pokemon.name) //##3 load-all-pokemons.js
    pokemonType(id, pokemon.types) //##4 load-all-pokemons.js
    pokemonIdNumber(id, pokemon.id)  //##5 load-all-pokemons.js

    pokemonMainPictureSmall(id, pokemon.sprites.other.home.front_default)  //##6 load-all-pokemons.js
    pokemonBackGroundColorSmall(id, pokemonSpecies.color.name) //##2 load-all-pokemons.js
}

async function loadPokemonInfo(id){
    const pokemon = await createNewPokemonApi(id);
    console.log('1pokemon', pokemon)
    const pokemonSpecies = await createNewPokemonSpeciesApi(id);
    console.log('2pokemonSpecies', pokemonSpecies)

    
    nameOfPokemonBig(pokemon.name) //##3 load-single-pokemon.js
    pokemonTypeBig(pokemon.types) //##4 load-single-pokemon.js
    pokemonIdNumberBig(pokemon.id)  //##5 load-single-pokemon.js
    pokemonMainPictureBig(pokemon.sprites.other.home.front_default)  //##6 load-single-pokemon.js
    pokemonStats(pokemon.stats) //##9 load-single-pokemon.js
    pokemonAbilities(pokemon.abilities) //##11 load-single-pokemon.js
    displayPokemonHeight(pokemon.height) //##12 load-single-pokemon.js
    displayPokemonWeight(pokemon.weight) //##13 load-single-pokemon.js
    
    pokemonBackGroundColorBig(pokemonSpecies.color.name) //##2 load-single-pokemon.js
    pokemonBreeding(pokemonSpecies.egg_groups) //##7 load-single-pokemon.js
    nameOfThePokemonInOtherLanguages(pokemonSpecies.names) //##8 load-single-pokemon.js
    pokemonSpeciesGenera(pokemonSpecies.genera) //##10 load-single-pokemon.js
    displayPokemonFemaleMale(pokemonSpecies.gender_rate)
}
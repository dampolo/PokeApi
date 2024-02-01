//##1
function loadAllPokemonsHtml(id) {
    const content = document.querySelector('.content-single');
    loadSmallPokemonHtml(id, content)
}

function loadAllPokemonsSearchHtml(id, i) {
    const content = document.querySelector('.search-content-single');
    searchSmallPokemonHtml(id, content, i)
}

//##2 Background color of the pokemon 
function pokemonBackGroundColorSmall(id, backGroundColor){
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
    document.querySelector(`.pokemon-img-content[data-id="${id}"]`).classList.add(color)
}

//##3  Name of the pokemon.
function nameOfPokemon(id, pokemonName) {
    document.querySelector(`.pokemon-name[data-id="${id}"]`).textContent = pokemonName;
}

//##4  A list of details showing types this Pokémon has.
function pokemonType(id, currentPokemonType) {
    let types = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        types += `<div class="pokemon-type-name rounded-3 px-1 py-1">${element.type.name}</div>`;
    }
    document.querySelector(`.pokemon-type[data-id="${id}"]`).innerHTML = types;
}

//##5  Number and Id of the pokemon.
function pokemonIdNumber(id, pokemonId) {
        document.querySelector(`.pokemon-number[data-id="${id}"]`).textContent = `#${pokemonId.toString().padStart(5, '0')}`;
}

//##6  The main picture of pokemon
function pokemonMainPictureSmall(id, pokemonImg) {
    const imageUrl = pokemonImg.other.home.front_default ?? pokemonImg.other.official-artwork.front_default;
    document.querySelector(`.img-content[data-id="${id}"]`).src = imageUrl;
}

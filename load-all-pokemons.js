//##1
function loadAllPokemonsHtml(id) {

    const content = document.querySelector('.content-single');

    const pokemonImgContent = document.createElement('div');
    pokemonImgContent.className = `pokemon-img-content rounded-5`;
    pokemonImgContent.setAttribute('data-id', `${id}`);
    pokemonImgContent.setAttribute('onclick', `renderPokemonInfo(${id})`);

    const pokemonNameTypeNumber = document.createElement('div');
    pokemonNameTypeNumber.className = 'pokemon-name-type-number mx-3';

    const pokemonNameType = document.createElement('div');
    pokemonNameType.className = 'pokemon-name-type';

    const pokemonName = document.createElement('div');
    pokemonName.className = `pokemon-name text-capitalize fs-2 fw-bold`;
    pokemonName.setAttribute('data-id', `${id}`)

    const pokemonType = document.createElement('div');
    pokemonType.className = `pokemon-type pokemon-type-content`;
    pokemonType.setAttribute('data-id', `${id}`)

    const pokemonNumberImgContainer = document.createElement('div');
    pokemonNumberImgContainer.className = 'number-img-container';


    const pokemonNumberContent = document.createElement('div');
    pokemonNumberContent.className = 'pokemon-number-content';
    
    const pokemonNumber = document.createElement('span');
    pokemonNumber.className = `pokemon-number pe-2 fs-5 fa-solid opacity-25 fw-bold text-dark`;
    pokemonNumber.setAttribute('data-id', `${id}`)

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    
    const imgContent = document.createElement('img');
    imgContent.className = 'img-content';
    imgContent.setAttribute('data-id', `${id}`)
    
    content.appendChild(pokemonImgContent);
    pokemonImgContent.appendChild(pokemonNameTypeNumber);
    pokemonNameTypeNumber.appendChild(pokemonNameType);
    pokemonNameType.appendChild(pokemonName);
    pokemonNameType.appendChild(pokemonType);

    pokemonImgContent.appendChild(pokemonNumberImgContainer);
    pokemonNumberImgContainer.appendChild(pokemonNumberContent);
    pokemonNumberContent.appendChild(pokemonNumber);

    pokemonNumberImgContainer.appendChild(imgContainer);
    imgContainer.appendChild(imgContent);
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

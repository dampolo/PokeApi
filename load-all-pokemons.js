//##1
function loadAllPokemonsHtml(id) {

    const content = document.querySelector('.content-single');

    const pokemonImgContent = document.createElement('div');
    pokemonImgContent.className = `pokemon-img-content${id} pokemon-img-content rounded-5`;
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
function pokemonBackGroundColorSmall(id, BackGroundColor){
    if (BackGroundColor == 'green') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(70, 209, 178)';
    } else if (BackGroundColor == 'red') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(249,103,103)';
    } else if (BackGroundColor == 'blue') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(119,190,254)';
    } else if (BackGroundColor == 'white') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(160, 181, 54)';
    } else if (BackGroundColor == 'yellow') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(207, 152, 58)';
    }  else if (BackGroundColor == 'brown') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(207, 152, 58)';
    } else if (BackGroundColor == 'purple') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(233, 168, 242)';
    } else {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = BackGroundColor;
    }
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
        document.querySelector(`.pokemon-number[data-id="${id}"]`).textContent = `#${pokemonId.toString().padStart(4, '0')}`;
}

//##6  The main picture of pokemon
function pokemonMainPictureSmall(id, pokemonImg) {
    const imageUrl = pokemonImg.other.home.front_default ?? pokemonImg.other.official-artwork.front_default;
    document.querySelector(`.img-content[data-id="${id}"]`).src = imageUrl;
}

//##1
function loadAllPokemonsHtml(id) {

    const content = document.querySelector('.content-single');

    const pokemonImgContent = document.createElement('div')
    pokemonImgContent.className = `pokemon-img-content${id} pokemon-img-content rounded-5`;
    pokemonImgContent.setAttribute('onclick', `renderPokemonInfo(${id})`);

    const pokemonNameTypeNumber = document.createElement('div')
    pokemonNameTypeNumber.className = 'pokemon-name-type-number mx-3'

    const pokemonNameType = document.createElement('div')
    pokemonNameType.className = 'pokemon-name-type'

    const pokemonName = document.createElement('div')
    pokemonName.className = `pokemon-name${id} pokemon-name text-capitalize fs-2 fw-bold`

    const pokemonType = document.createElement('div')
    pokemonType.className = `pokemon-type${id} pokemon-type-content`

    const pokemonNumberImgContainer = document.createElement('div')
    pokemonNumberImgContainer.className = 'number-img-container'

    const pokemonNumberContent = document.createElement('div')
    pokemonNumberContent.className = 'pokemon-number-content'
    
    const pokemonNumber = document.createElement('span')
    pokemonNumber.className = `pokemon-number${id} pokemon-number pe-2 fs-5 fa-solid opacity-25 fw-bold text-dark`
    
    const imgContainer = document.createElement('div')
    imgContainer.className = 'img-container'
    
    const imgContent = document.createElement('img')
    imgContent.className = `img-content${id} img-content`
    
    content.appendChild(pokemonImgContent)
    pokemonImgContent.appendChild(pokemonNameTypeNumber)
    pokemonNameTypeNumber.appendChild(pokemonNameType)
    pokemonNameType.appendChild(pokemonName)
    pokemonNameType.appendChild(pokemonType)

    pokemonImgContent.appendChild(pokemonNumberImgContainer)
    pokemonNumberImgContainer.appendChild(pokemonNumberContent)
    pokemonNumberContent.appendChild(pokemonNumber)

    pokemonNumberImgContainer.appendChild(imgContainer)
    imgContainer.appendChild(imgContent)
}

//##2 Background color of the pokemon 
function pokemonBackGroundColorSmall(id, BackGroundColor){
    if (BackGroundColor == 'green') {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(70, 209, 178)';
    } else if (BackGroundColor == "red") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(249,103,103)';
    } else if (BackGroundColor == "blue") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(119,190,254)';
    } else if (BackGroundColor == "white") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(160, 181, 54)';
    } else if (BackGroundColor == "yellow") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(207, 152, 58)';
    }  else if (BackGroundColor == "brown") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(207, 152, 58)';
    } else if (BackGroundColor == "purple") {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = 'rgb(233, 168, 242)';

    } else {
        document.querySelector(`.pokemon-img-content${id}`).style.backgroundColor = BackGroundColor;
    }
}

//##3  Name of the pokemon.
function nameOfPokemon(id, pokemonName) {
    document.querySelector(`.pokemon-name${id}`).textContent = pokemonName
}

//##4  A list of details showing types this Pokémon has.
function pokemonType(id, currentPokemonType) {
    const typeEl = document.querySelector(`.pokemon-type${id}`);
    typeEl.innerHTML = '';
    for (let i = 0; i < currentPokemonType.length; i++) {
        const element = currentPokemonType[i];
        typeEl.innerHTML += `<div class="pokemon-type-name rounded-3 px-1 py-1">${element.type.name}</div>`;
    }
}

//##5  Number and Id of the pokemon.
function pokemonIdNumber(id, pokemonId) {
    const numberEl = document.querySelector(`.pokemon-number${id}`)
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

//##6  The main picture of pokemon
function pokemonMainPictureSmall(id, pokemonImg) {
    document.querySelector(`.img-content${id}`).src = `${pokemonImg}`;
}
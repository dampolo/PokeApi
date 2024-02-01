function searchSmallPokemonHtml(id, content, i) {
    const pokemonImgContent = document.createElement('div');
    pokemonImgContent.className = `pokemon-img-content rounded-5`;
    pokemonImgContent.setAttribute('data-id', `${id}`);
    pokemonImgContent.setAttribute('onclick', `searchRenderPokemonInfo(${id}, ${i})`);

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
    imgContent.setAttribute('loading', 'lazy');
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
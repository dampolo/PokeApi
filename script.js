let currentPokemon;
let currentPokemonAbilities;
let currentPokemonStats;
let currentPokemonHeldItems;
let currentPokemonGameIndices;


async function loadPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    const response = await fetch(url);
    currentPokemon = await response.json()
    currentPokemonAbilities = currentPokemon.abilities
    currentPokemonStats = currentPokemon.stats;
    currentPokemonHeldItems = currentPokemon.held_items
    currentPokemonGameIndices = currentPokemon.game_indices;

    console.log(currentPokemon)
    // console.log(currentPokemon)

    renderPokemonInfo()
}

function renderPokemonInfo() {
    document.getElementById('pokemon-name').textContent = currentPokemon.name
    document.getElementById('img').src = currentPokemon.sprites.front_shiny


    const heldItemsEl = document.getElementById('pokemon-held-items');
    heldItemsEl.innerHTML = `<h2>Held items</h2>`

    for (let i = 0; i < currentPokemonHeldItems.length; i++) {
        const element = currentPokemonHeldItems[i];
        heldItemsEl.innerHTML += `<div>${element.item.name}</div>`;
    }

    const abilitiesEl = document.getElementById('pokemon-abilities');
    abilitiesEl.innerHTML = `<h2>Abilities</h2>`

    for (let i = 0; i < currentPokemonAbilities.length; i++) {
        const element = currentPokemonAbilities[i];
        abilitiesEl.innerHTML += `<div>${element.ability.name}</div>`;
    }

    const statsEl = document.getElementById('pokemon-stats');
    statsEl.innerHTML = `<h2>Stats</h2>`

    for (let i = 0; i < currentPokemonStats.length; i++) {
        const element = currentPokemonStats[i];
        statsEl.innerHTML += `<div>${element.stat.name}</div>`;
    }

    // const gameIndicesEl = document.getElementById('pokemon-game-indices');
    // gameIndicesEl.innerHTML = `<h2>Game Indices</h2>`

    // for (let i = 0; i < currentPokemonGameIndices.length; i++) {
    //     const element = currentPokemonGameIndices[i];
    //     gameIndicesEl.innerHTML += `<div>${element.version.name}</div>`;
    // }
}
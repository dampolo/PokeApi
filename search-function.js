let searchTimeout;

document.querySelector('input[type="search"]').addEventListener('input', ()=>{
clearTimeout(searchTimeout);

searchTimeout = setTimeout(()=> {
    const search = document.getElementById("search").value.toLowerCase();
    searchFunction(search);
    }, 1000);
})

async function searchFunction(search) {
    document.querySelector('.load-more-pokemons').setAttribute("disabled", null);
    if (search !== '') {

        document.querySelector('.content-single').innerHTML = '';
        const allPokemonsListId = await searchPokemonApi();
    
        const combinedArray = allPokemonsListId.map((pokemon) => ({
            name: pokemon.name,
            url: extractNumberFromUrl(pokemon.url)
            }));

        const filteredResults = combinedArray.filter((pokemon) => pokemon.name.includes(search));
        const urlArray = filteredResults.map((pokemon) => pokemon.url);
        loadAllPokemonsApiWithSearch(urlArray);
        } else {
            loadPokemonsAfterSearch()
        }
}
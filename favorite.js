let favoriteArray = [];

function loadAllPokemonsFavoriteHtml(id, i) {
  const content = document.querySelector('.favorite-content-single');
  loadSmallFavoriteHtml(id, content, i)
}

function addOrRemovePokemonToFavorite(id) {
    const index = favoriteArray.indexOf(id);
  
    if (index === -1) {
      // Pokemon ID not found in the favoriteArray, add it
      favoriteArray.push(id);
      document.querySelector(`.icon-heart[data-id="${id}"]`).innerHTML = `<use href="assets/icons/heart-red.svg#Layer_1"></use>`
      document.querySelector(`.confirmation[data-id="${id}"]`).classList.add('show-confirmation')
      
      document.querySelector(`.confirmation[data-id="${id}"]`).innerHTML = `<h6 class="confirmation-text">Good choice! Pokemon added to favorite.</h6>`
      removeShowConfirmationTime(id);
    } else {
      // Pokemon ID found in the favoriteArray, remove it
      favoriteArray.splice(index, 1);
      document.querySelector(`.icon-heart[data-id="${id}"]`).innerHTML = `<use href="assets/icons/heart-regular.svg#Layer_1"></use>`
      document.querySelector(`.confirmation[data-id="${id}"]`).classList.add('show-confirmation')
      document.querySelector(`.confirmation[data-id="${id}"]`).innerHTML = `<h6 class="confirmation-text">Removed from the favorite.</h6>`
      removeShowConfirmationTime(id);
    }
    displayCountTheFavoritePokeomns();
  }
  
function removeShowConfirmationTime(id) {
  setTimeout(() => {
    removeShowConfirmation(id);
  }, 3000);
}
  
function removeShowConfirmation(id) {
    document.querySelector(`.confirmation[data-id="${id}"]`).classList.remove('show-confirmation')
}
  
 function showFavoriteArray() {
    document.querySelector('.homepage').classList.remove('nav-menu-element-active')
    document.querySelector('.favorite').classList.add('nav-menu-element-active')
    document.querySelector('.content-single').innerHTML = '';
    document.querySelector('.show').innerHTML = '';
    document.querySelector('.search-show').innerHTML = '';
    document.querySelector('.search-content-single').innerHTML = '';
    document.querySelector('.favorite-content-single').innerHTML = '';
    document.querySelector('.favorite-show').innerHTML = '';
      // Hide/show elements
    document.querySelector('.content-single').classList.add('d-none');
    document.querySelector('.search-content-single').classList.add('d-none');
    document.querySelector('.favorite-content-single').classList.remove('d-none');

    document.querySelector('.load-more-pokemons').disabled = true;
    
    if(favoriteArray.length === 0) {
      document.querySelector('.favorite-content-single').innerHTML = 'You do not have any favortie pokemons.';
    } else { 
      for (let i = 0; i < favoriteArray.length; i++) {
        const element = favoriteArray[i];
        loadAllPokemonsFavoriteHtml(element, i)
        loadAllFavoritePokemonsBigHtml(element)
        loadPokemons(element);
      }
    }
    preventDefaultClick()
  }
  
  function countTheFavoritePokeomns(favoriteArray) {
    const lengthOfArray = favoriteArray.length;
    return lengthOfArray;
  }
  
  function displayCountTheFavoritePokeomns() {
    result = countTheFavoritePokeomns(favoriteArray)
    document.querySelector('.badge').textContent = result
  }


  function favoriteRenderPokemonInfo(id, i) {
    document.querySelector(".favorite-pokemon-bigger").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("favorite-image-left").style.visibility = 'visible';
    document.getElementById("favorite-image-right").style.visibility = 'visible';
  
    if(i ===  0 && i === (favoriteArray.length - 1)) {
      document.getElementById("favorite-image-left").style.visibility = 'hidden';
      document.getElementById("favorite-image-right").style.visibility = 'hidden';
    } else if (i ===  0) {
      document.getElementById("favorite-image-left").style.visibility = 'hidden';
    } else if (i === (favoriteArray.length - 1)) {
      document.getElementById("favorite-image-right").style.visibility = 'hidden';
    }

    loadPokemonInfo(id);
    favoriteAddNumberToNextImageRight(id, i);
    favoriteAddNumberToNextImageLeft(id, i);
    // id--;
    favoriteUpdateOffset(i);
  }


function favoriteUpdateOffset(i) {
    const offset = -i * 100 + "%";
    document.querySelector(".favorite-show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}
  
function favoriteUpdateOffsetLeft(i) {
    const offset = -i * 100 + "%";
    document.querySelector(".favorite-show").style.transform = `translate3d(${offset}, 10px, 10px)`;
}
  
  //##23 - load-single-pokemon.js
function favoriteAddNumberToNextImageRight(id, i) {
  document.getElementById("favorite-image-right").setAttribute("onclick", `favoriteNextImageRight(${id}, ${i})`);
}
  
  //##24 - load-single-pokemon.js
function favoriteAddNumberToNextImageLeft(id, i) {
  document.getElementById("favorite-image-left").setAttribute("onclick", `favoriteNextImageLeft(${id}, ${i})`);
}

function favoriteNextImageRight(id, i) {
  document.getElementById("favorite-image-left").style.visibility = 'visible';
  i++
  id = favoriteArray[i]
  favoriteUpdateOffset(i);
  loadPokemonInfo(id);
  if (i === (favoriteArray.length - 1)) {
    document.getElementById("favorite-image-right").style.visibility = 'hidden';
  } else {
    favoriteAddNumberToNextImageRight(id, i);
  }
  favoriteAddNumberToNextImageLeft(id, i);
}

function favoriteNextImageLeft(id, i) {
  document.getElementById("favorite-image-right").style.visibility = 'visible';
  i--;
  id = favoriteArray[i]
  favoriteUpdateOffsetLeft(i);
  loadPokemonInfo(id);
  if(i ===  0) {
    document.getElementById("favorite-image-left").style.visibility = 'hidden';
  } else {
    favoriteAddNumberToNextImageLeft(id, i);
  }
  favoriteAddNumberToNextImageRight(id, i);
}
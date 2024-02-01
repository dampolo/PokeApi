
function showSection(id, sectionClass) {
  const sections = [
    "about-section",
    "description-section",
    "pokemon-languages",
    "pokemon-stats",
    "pokemon-evolution",
    "pokemon-moves",
    "growth-rate",
    "other-pictures",
  ];

  const navMenu = [
    "about-nav-item",
    "description-nav-item",
    "languages-nav-item",
    "stats-nav-item",
    "evolution-nav-item",
    "moves-nav-item",
    "growth-rate-nav-item",
    "other-pictures-nav-item",
  ];
  const navMenuA = [
    "about-nav-item-a",
    "description-nav-item-a",
    "languages-nav-item-a",
    "stats-nav-item-a",
    "evolution-nav-item-a",
    "moves-nav-item-a",
    "growth-rate-nav-item-a",
    "other-pictures-nav-item-a",
  ];

  sections.forEach((section, i) => {
    const element = document.querySelector(`.${section}[data-id="${id}"]`);
    const menuElement = document.querySelector(
      `.${navMenu[i]}[data-id="${id}"]`
    );
    const AElement = document.querySelector(`.${navMenuA[i]}[data-id="${id}"]`);

    if (section === sectionClass) {
      element.classList.remove("d-none");
      menuElement.classList.add("active");
      AElement.classList.add("active-a");
    } else {
      element.classList.add("d-none");
      menuElement.classList.remove("active");
      AElement.classList.remove("active-a");
    }
  });
}

//##2 load-single-pokemon
function pokemonBackGroundColorBig(id, backGroundColor) {
  const colorMap = {
    green: "pokemon-green",
    red: "pokemon-red",
    blue: "pokemon-blue",
    white: "pokemon-white",
    yellow: "pokemon-yellow",
    brown: "pokemon-brown",
    purple: "pokemon-purple",
    black: "pokemon-cream",
    pink: "pokemon-pink",
    gray: "pokemon-gray",
  };

  const color = colorMap[backGroundColor] ?? "pokemon-defult";
  document
    .querySelector(`.pokemon-top-section[data-id="${id}"]`)
    .classList.add(color);
}

//##3 load-single-pokemon
function nameOfPokemonBig(id, pokemon) {
  const nodeList = document.querySelectorAll(
    `.pokemon-name-big[data-id="${id}"]`
  );
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = pokemon;
  }
}

//##4  A list of details showing types this Pokémon has.
function pokemonTypeBig(id, currentPokemonType) {
  types = "";
  for (let i = 0; i < currentPokemonType.length; i++) {
    const element = currentPokemonType[i];
    types += `<div class="pokemon-type-name rounded-3 px-2 py-1">${element.type.name}</div>`;
  }
  document.querySelector(`.pokemon-type-big[data-id="${id}"]`).innerHTML =
    types;
}

//##5 load-single-pokemon
function pokemonIdNumberBig(id, pokemonId) {
  document.querySelector(
    `.pokemon-number-big[data-id="${id}"]`
  ).textContent = `#${pokemonId.toString().padStart(5, "0")}`;
}

// ##6 load-single-pokemon
function pokemonMainPictureBig(id, pokemonImg) {
  const imgElement = document.querySelector(`.img[data-id="${id}"]`);
  imgElement.src =
    pokemonImg.other.home.front_default ??
    pokemonImg.other.official - artwork.front_default;
}

//##7 load-single-pokemon
function pokemonBreeding(id, eggGroupsCycle) {
  const eggGroups = document.querySelector(
    `.pokemon-egg-groups[data-id="${id}"]`
  );
  const eggCycle = document.querySelector(
    `.pokemon-egg-cycle[data-id="${id}"]`
  );

  // eggCycle.innerHTML = currentPokemonSpecies.egg_groups[1].name;
  if (!eggGroupsCycle[0] || !eggGroupsCycle[0].name) {
    eggGroups.textContent = "---------";
  } else {
    eggGroups.innerHTML = eggGroupsCycle[0].name;
  }

  if (!eggGroupsCycle[1] || !eggGroupsCycle[1].name) {
    eggCycle.textContent = "---------";
  } else {
    eggCycle.innerHTML = eggGroupsCycle[1].name;
  }
}

//##8 Name of the pokemon in other languages.
function nameOfThePokemonInOtherLanguages(id, pokemonSpeciesNames) {
  let languages = "";

  const languageMap = {
    "ja-Hrkt": "Japanese",
    roomaji: "Japanese (Latin alphabet)",
    ko: "Korean",
    "zh-Hant": "Chinese",
    fr: "French",
    de: "German",
    es: "Spanish",
    it: "Italian",
    en: "English",
  };

  for (let i = 0; i < pokemonSpeciesNames.length - 2; i++) {
    const element = pokemonSpeciesNames[i];
    const languageName = languageMap[element.language.name];
    if (languageName) {
      languages += `<dt class="languages-dt">${languageName}</dt>
                                    <dd>${element.name}</dd>`;
    } else {
      languages += `<dt class="languages-dt">${languageName}</dt>
                            <dd>This pokemon do not have name in this language.</dd>`;
    }
  }
  document.querySelector(
    `.pokemon-languages-content[data-id="${id}"]`
  ).innerHTML = languages;
}

//##9 Die function show the statistik.
function pokemonStats(id, currentPokemonStats) {
  const statsEl = document.querySelector(
    `.pokemon-stats-content[data-id="${id}"]`
  );
  statsEl.innerHTML = '';

  let totalSum = 0;

  for (let i = 0; i < currentPokemonStats.length; i++) {
    const element = currentPokemonStats[i];
    totalSum += element.base_stat;

    if (
      element.stat.name === "hp" ||
      element.stat.name === "defense" ||
      element.stat.name === "speed"
    ) {
      statsEl.innerHTML += /*html*/ `
                <div class="row my-3 d-flex align-items-center">
                  <div class="text-capitalize col-4 p-0 fw-bold pokemon-base-stats-name">${
                    element.stat.name
                  }</div>
                      <div class="col-1 p-0 fw-bold">${element.base_stat}
                      </div>
                  <div class="progress col-7 px-0">
                      <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" style="width: ${
                        element.base_stat / 1.5
                      }%" aria-valuemin="0" aria-valuemax="200">
                      </div>
                  </div>
                </div>`;
    } else {
      statsEl.innerHTML += /*html*/ `
                <div class="row my-3 d-flex align-items-center">
                  <div class="text-capitalize col-4 p-0 fw-bold pokemon-base-stats-name">${
                    element.stat.name
                  }</div>
                      <div class="col-1 p-0 fw-bold">${element.base_stat}
                      </div>
                  <div class="progress col-7 px-0">
                      <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${
                        element.base_stat / 1.5
                      }%" aria-valuemin="0" aria-valuemax="200">
                      </div>
                  </div>
                </div>`;
    }
  }
  statsEl.innerHTML += /*html*/ `
            <div class="row my-3 d-flex align-items-center">
                <div class="text-capitalize col-3 p-0 fw-bold pokemon-base-stats-name">Total</div>
                    <div class="col-1 p-0 fw-bold">${totalSum}
                    </div>
                <div class="progress col-7 px-0 ms-auto">
                    <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${
                      totalSum / 7
                    }%" aria-valuemin="0" aria-valuemax="700">
                    </div>
                </div>
            </div>`;
}

//##10 Species of pokemon
function pokemonSpeciesGenera(id, pokemonSpeciesGenera) {
  const englishGenera = pokemonSpeciesGenera.find(
    (element) => element.language.name === 'en'
  );
  const species = englishGenera ? englishGenera.genus : "---------";

  document.querySelector(`.species[data-id="${id}"]`).textContent = species;
}

//##11 Species of pokemon
function pokemonAbilities(id, pokemonAbilities) {
  const abilitiesEl = document.querySelector(
    `.pokemon-abilities[data-id="${id}"]`
  );
  abilitiesEl.textContent = '';

  const abilitiesNames = pokemonAbilities.map(
    (element) => element.ability.name
  );
  abilitiesEl.textContent = abilitiesNames.join(', ');
}

//##12 Height of the pokemon calculation.
function calculatePokemonHeight(pokemonHeight) {
  const pokemonHeightResult = (pokemonHeight * 10) / 100;
  return pokemonHeightResult;
}

//##12 Height of the pokemon calculation.
function formatNumberWithCommaHeight(number) {
  return Intl.NumberFormat("de-IN").format(number);
}

//##12 Height of the pokemon display.
function displayPokemonHeight(id, pokemonHeight) {
  const result = calculatePokemonHeight(pokemonHeight);
  const resultWithComma = formatNumberWithCommaHeight(result);
  document.querySelector(`.pokemon-height-cm[data-id="${id}"]`).textContent =
    "(" + resultWithComma + " m)";
}

//##13 Weight of the pokemon calculation.
function calculatePokemonWeight(pokemonWeight) {
  const pokemonWeightResult = pokemonWeight / 10;
  return pokemonWeightResult;
}

//##13 Weight of the pokemon display.
function formatNumberWithCommaWeight(number) {
  return Intl.NumberFormat("de-IN").format(number);
}

//##13 Weight of the pokemon display.
function displayPokemonWeight(id, pokemonWeight) {
  const result = calculatePokemonWeight(pokemonWeight);
  const resultWithComma = formatNumberWithCommaWeight(result);
  document.querySelector(`.pokemon-weight-kg[data-id="${id}"]`).textContent =
    "(" + resultWithComma + " kg)";
}

//##14 Female or Male
function calculateFemaleMale(currentFemaleMale) {
  const femalePercent = (currentFemaleMale * 100) / 8;
  const malePercent = 100 - femalePercent;
  return {
    female: femalePercent,
    male: malePercent,
  };
}

//##14 Female or Male
function formatNumberWithCommaFemalMale(result) {
  return {
    female: Intl.NumberFormat("de-IN").format(result.female),
    male: Intl.NumberFormat("de-IN").format(result.male),
  };
}

//##14 Female or Male
function displayPokemonFemaleMale(id, currentFemaleMale) {
  const result = calculateFemaleMale(currentFemaleMale);
  const resultWithComma = formatNumberWithCommaFemalMale(result);
  document.querySelector(
    `.pokemon-gender-female[data-id="${id}"]`
  ).textContent = resultWithComma.female + " %";
  document.querySelector(`.pokemon-gender-male[data-id="${id}"]`).textContent =
    resultWithComma.male + " %";
}

//##15 Moves
function pokemonMoves(id, pokemonMoveName) {
  let moves = "";

  for (let i = 0; i < pokemonMoveName.length; i++) {
    const element = pokemonMoveName[i];
    moves += `<div class="pokemon-move-name">${element.move.name}</div>`;
  }
  document.querySelector(`.pokemon-moves-content[data-id="${id}"]`).innerHTML =
    moves;
}

//##16 Growth Rate
function pokemonGrowth(id, growthRate) {
  document.querySelector(
    `.growth-rate-content-dd[data-id="${id}"]`
  ).innerHTML = `${growthRate}`;
}

//##17 All Growth Rate
function pokemonAllGrowthRates(id, pokemonAllRatesList) {
  let allGrowthRateContentDd = "";

  for (let i = 0; i < pokemonAllRatesList.length; i++) {
    const element = pokemonAllRatesList[i].name;
    allGrowthRateContentDd += `<dd class="all-growth-rate-content-dd">${element}</dd>`;
  }
  document.querySelector(
    `.all-growth-rate-content-dd[data-id="${id}"]`
  ).innerHTML = allGrowthRateContentDd;
}

// ##18 - 1 part load-single-pokemon.js
function extractNumberFromUrl(url) {
  // Match the last sequence of digits in the URL
  const match = url.match(/\/(\d+)\/$/);
  // Check if there is a match
  if (match && match[1]) {
    // Extracted number
    const number = parseInt(match[1], 10);
    return number;
  } else {
    // Return an error or handle the case where no number is found
    return null;
  }
}

// ##18 - 2 part load-single-pokemon.js
function evolutionLoadTheNameFromTheChain(id, defultName, firstName, secondName) {
  const defultNameEl = document.querySelector(`.defult-name-evolution[data-id="${id}"]`);
  defultNameEl.textContent = defultName;

  const imgFirstNameEl = document.querySelectorAll(`.img-first-name-evolution[data-id="${id}"]`);
  for (let i = 0; i < imgFirstNameEl.length; i++) {
    imgFirstNameEl[i].textContent = firstName;
  }

  const firstNameEl = document.querySelectorAll(`.first-name-evolution[data-id="${id}"]`);
        for (let i = 0; i < firstNameEl.length; i++) {
            firstNameEl[i].textContent = firstName;
        }

  const secondNameEl = document.querySelector(`.second-name-evolution[data-id="${id}"]`);
  secondNameEl.textContent = secondName;
}

// ##18 - 3 part load-single-pokemon.js
function evolutionLoadTheImageThroughTheNameFromTheChainOneEvolution(
  id,
  defultPokemonImg,
  firstPokemonImg
) {
  document.querySelector(`.img-defult-name-evolution[data-id="${id}"]`).src =
    defultPokemonImg.sprites.other.home.front_default;

  const imgFirstName = document.querySelectorAll(`.img-first-name-evolution[data-id="${id}"]`)
      for (let i = 0; i < imgFirstName.length; i++) {
          imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
      }
}

// ##18 - 4 part load-single-pokemon.js
function evolutionLoadTheImageThroughTheNameFromTheChainTwoEvolution(id, defultPokemonImg, firstPokemonImg, secondPokemonImg) {
  document.querySelector(`.img-defult-name-evolution[data-id="${id}"]`).src =
    defultPokemonImg.sprites.other.home.front_default;

  const imgFirstName = document.querySelectorAll(`.img-first-name-evolution[data-id="${id}"]`)
      for (let i = 0; i < imgFirstName.length; i++) {
          imgFirstName[i].src = firstPokemonImg.sprites.other.home.front_default;
      }
  document.querySelector(`.img-second-name-evolution[data-id="${id}"]`).src =
    secondPokemonImg.sprites.other.home.front_default;
}

//##19 load-single-pokemon.js
function allPictures(id, images) {
  const parentElement = document.querySelector(
    `.other-pictures-list[data-id="${id}"]`
  );

  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }

  for (let i = 0; i < imageTypes.length; i++) {
    const node = document.createElement("img");
    if (getImageSource(images, imageTypes[i]) == null) {
      node.classList.add("d-none");
    } else {
      node.src = getImageSource(images, imageTypes[i]);
      node.setAttribute('loading', 'lazy');
      node.classList.add("all-picture");
      node.classList.add("img-fluid");
      node.classList.add("w-50");

      document.querySelector(`.other-pictures-list[data-id="${id}"]`).appendChild(node);
    }
  }
  amountOfPictures(id, images);
}

//##19 load-single-pokemon.js
function getImageSource(sprites, type) {
  const keys = type.split(".");
  let result = sprites;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
}

//##19 part 2 load-single-pokemon.js
function amountOfPictures(id, images) {
  let numberOfImages = 0;

  for (let i = 0; i < imageTypes.length; i++) {
    const imageSource = getImageSource(images, imageTypes[i]);

    if (imageSource !== null) {
      numberOfImages++;
    }
    document.querySelector(`.amount-of-pictures[data-id="${id}"]`).textContent = numberOfImages;
  }
}

//##20 Part 1 load-single-pokemon.js
function descriptionOfThePokemon(id, languages) {
  const descriptionEnglish = document.querySelector(`.description-section-english[data-id="${id}"]`);
  const descriptionGerman = document.querySelector(`.description-section-german[data-id="${id}"]`);
  const descriptionSpanish = document.querySelector(`.description-section-spanish[data-id="${id}"]`);
  const descriptionFrench = document.querySelector(`.description-section-french[data-id="${id}"]`);
  const descriptionItalian = document.querySelector(`.description-section-italian[data-id="${id}"]`);
  const descriptionJapan = document.querySelector(`.description-section-japan[data-id="${id}"]`);
  const descriptionKorean = document.querySelector(`.description-section-korean[data-id="${id}"]`);
  const descriptionChina = document.querySelector(`.description-section-china[data-id="${id}"]`);

  if (languages.length === 0) {
    descriptionEnglish.textContent = "There is no description in this language";
    descriptionGerman.textContent = "There is no description in this language";
    descriptionSpanish.textContent = "There is no description in this language";
    descriptionFrench.textContent = "There is no description in this language";
    descriptionItalian.textContent = "There is no description in this language";
    descriptionJapan.textContent = "There is no description in this language";
    descriptionKorean.textContent = "There is no description in this language";
    descriptionChina.textContent = "There is no description in this language";
  } else {
    for (let i = 0; i < languages.length; i++) {
      const element = languages[i];
      if (element.language.name === "en") {
        descriptionEnglish.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "de") {
        descriptionGerman.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "es") {
        descriptionSpanish.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "fr") {
        descriptionFrench.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "it") {
        descriptionItalian.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "ja") {
        descriptionJapan.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "ko") {
        descriptionKorean.innerHTML += `<span>${element.flavor_text}</span>`;
      } else if (element.language.name === "zh-Hant") {
        descriptionChina.innerHTML += `<span>${element.flavor_text}</span>`;
      } 
    }
  }
}

//##21 load-single-pokemon.js
function calculatePokemonHeightFett(pokemonHeight) {
  // 1 inch = 2.54 cm
  // 1 foot = 12 inches
  // Convert height to inches
  const heightInInches = (pokemonHeight * 10) / 2.54;

  // Calculate feet and inches
  const feet = Math.round(heightInInches / 12);
  const inches = (heightInInches % 12).toFixed(1);
  const inchesNumber = parseFloat(inches);

  return { feet, inchesNumber };
}

//##21 load-single-pokemon.js
function displayPokemonHeightFeet(id, pokemonHeight) {
  const result = calculatePokemonHeightFett(pokemonHeight);
  document.querySelector(`.pokemon-height-feet[data-id="${id}"]`).textContent =
    result.feet + "'" + result.inchesNumber + '"';
}

//##22 part1 - load-single-pokemon.js
function calculatePokemonWeightIbs(pokemonWeight) {
  const pounds = ((pokemonWeight * 2.20462) / 10).toFixed(1);
  return pounds;
}

//##22 part2 - load-single-pokemon.js
function displayPokemonWeightIbs(id, pokemonWeight) {
  const result = calculatePokemonWeightIbs(pokemonWeight);
  document.querySelector(`.pokemon-weight-ibs[data-id="${id}"]`).textContent =
    result + ' Ibs ';
}

//##20 Part 1 load-single-pokemon.js
function pokemonLanguages(id, sectionClass) {
  const sections = [
    "english",
    "german",
    "spanish",
    "french",
    "italian",
    "japanese",
    "koreanish",
    "chinesisch",
  ];
  const showSection = [
    "description-section-english",
    "description-section-german",
    "description-section-spanish",
    "description-section-french",
    "description-section-italian",
    "description-section-japan",
    "description-section-korean",
    "description-section-china",
  ];

  sections.forEach((section, i) => {
    const element = document.querySelector(`.${sections[i]}[data-id="${id}"]`);
    const showEl = document.querySelector(`.${showSection[i]}[data-id="${id}"]`);

    if (section === sectionClass) {
      element.classList.add("flag-active");
      showEl.classList.remove("d-none");
    } else {
      showEl.classList.add("d-none");
      element.classList.remove("flag-active");
    }
  });
}


// mozna to powwstryzamc tak
// document.querySelector('a.moj-link.czy-jakis-tam-selektor').addEventListener('click',(event)=>{
// event.preventDefault(); // to powstrzyma przeniesienie elementu na gore strony
// });


// function flyingPokemons(img) {
  
//   document.querySelector('.img-flying-pokemon1').src = img.sprites.other.showdown.front_default;
//   document.querySelector('.img-flying-pokemon2').src = img.sprites.other.showdown.front_default;

// }

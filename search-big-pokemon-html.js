function searchAllSinglePokemonsBigHtml(id) {
    let favoritePokemon = favoriteArray.includes(id)
    const pokemonBiggerEl = document.querySelector('.search-show');
    pokemonBiggerEl.innerHTML += /*html*/ `

            <div class="main-slider">
              <div class="slider">

              <div class="pokemon-top-section" data-id="${id}">
                <div class="small-loader-content">
                  <div class="small-loader">                    
                  </div>
                </div>
              <div class="pokemon-arrow-heart">

                <svg onclick="closeImage(event)" class="icon-arrow" data-id="${id}">
                  <use href="./icons/arrow-narrow-left.svg#Layer_2"></use>
                </svg>
                
                <svg onclick="addOrRemovePokemonToFavorite(${id})" class="icon-heart" data-id="${id}">
                  ${favoritePokemon ? '<use href="./icons/heart-red.svg#Layer_1"></use>' : '<use href="./icons/heart-regular.svg#Layer_1"></use>'}
                </svg>
              </div>

              <div class="pokemon-img">
                <div class="pokemon-name-type-number">
                    <div class="pokemon-name-type">
                      <div class="pokemon-name-big text-capitalize fs-1 fw-bold" data-id="${id}"></div>
                      <div class="pokemon-type-big d-flex gap-2" data-id="${id}"></div>
                    </div>
                  <div class="pokemon-number-container fs-4 fw-bold"><span class="pokemon-number-big" data-id="${id}"></span>
                  </div>
                </div>
                    <div class="image-div">

                      <img class="img" data-id="${id}" src="" alt="" srcset="" />
                    </div>

              </div>

                </div>
                <div class="pokemon-bottom">
            <div class="navbar-section">
              <div id="left-icon" class="nav-arrow-single" onclick="toLeft(${id})">
                <a href="x">
                  <img class="nav-arrow" src="./icons/nav-arrow-left.svg" alt="left-icon"/>
              </a>
            </div>
                <ul class="pokemon-navbar" data-id="${id}">
                  <li class="pokemon-nav-item about-nav-item active" data-id="${id}" onclick="showSection('${id}','about-section')">
                    <a href="x" class="text-decoration-none about-nav-item-a active-a" data-id="${id}">About</a>
                  </li>
                  <li class="pokemon-nav-item description-nav-item" data-id="${id}" onclick="showSection('${id}','description-section')">
                    <a href="x" class="text-decoration-none description-nav-item-a" data-id="${id}">Description</a>
                  </li>
                  <li class="pokemon-nav-item languages-nav-item" data-id="${id}" onclick="showSection('${id}','pokemon-languages')">
                    <a href="x" class="text-decoration-none languages-nav-item-a" data-id="${id}">Languages</a>
                  </li>
                  <li class="pokemon-nav-item stats-nav-item" data-id="${id}" onclick="showSection('${id}','pokemon-stats')">
                    <a href="x" class="text-decoration-none stats-nav-item-a" data-id="${id}">Base stats</a>
                  </li>
                  <li class="pokemon-nav-item evolution-nav-item" data-id="${id}" onclick="showSection('${id}','pokemon-evolution')">
                    <a href="x" class="text-decoration-none evolution-nav-item-a" data-id="${id}">Evolution</a>
                  </li>
                  <li class="pokemon-nav-item moves-nav-item" data-id="${id}" onclick="showSection('${id}','pokemon-moves')">
                    <a href="x" class="text-decoration-none moves-nav-item-a" data-id="${id}">Moves</a>
                  </li>
                  <li class="pokemon-nav-item growth-rate-nav-item" data-id="${id}" onclick="showSection('${id}','growth-rate')">
                    <a href="x" class="text-decoration-none growth-rate-nav-item-a" data-id="${id}">Growth rate</a>
                  </li>
                  <li class="pokemon-nav-item other-pictures-nav-item" data-id="${id}" onclick="showSection('${id}','other-pictures')">
                    <a href="x" class="text-decoration-none other-pictures-nav-item-a" data-id="${id}">Pictures</a>
                  </li>
                </ul>
                <div id="right-icon" class="nav-arrow-single" data-id="${id}" onclick="toRight(${id})">
                  <a href="x"><img class="nav-arrow" src="./icons/nav-arrow-right.svg" alt="right-icon"/> </a>
                </div>
              </div>
              <div class="all-sections">         
                <section class="about-section" data-id="${id}">
                  
                  <h3>About</h3>
                  <dl class="about-dl">
                    
                    <dt class="about-dt">Species</dt>
                    <dd class="species about-dd" data-id="${id}"></dd>
                    
                    <dt class="about-dt">Height</dt>
                    <dd class="about-dd"><span class="pokemon-height-feet" data-id="${id}"></span> <span class="pokemon-height-cm" data-id="${id}"></span></dd>
                    
                    <dt class="about-dt">Weight</dt>
                    <dd class="pokemon-weight about-dd"><span class="pokemon-weight-ibs" data-id="${id}"></span><span class="pokemon-weight-kg" data-id="${id}"></span></dd>
                                      
                    <dt class="about-dt">Abilities</dt>
                    <dd class="pokemon-abilities about-dd" data-id="${id}"></dd>
                    
                    <h3>Breeding</h3>
                    
                    <dt class="about-dt">Gender</dt>
                    <div class="gender-info">
                      <dd><img src="./icons/gender-female.svg" alt=""></dd>
                      <dd class="pokemon-gender-female" data-id="${id}"></dd>
                      <dd><img src="./icons/gender-male.svg" alt=""></dd>
                      <dd class="pokemon-gender-male" data-id="${id}"></dd>
                    </div>
  
                    <div>
                      <dt class="about-dt">Egg Groups</dt>
                      <dd class="pokemon-egg-groups about-dd" data-id="${id}"></dd>
                    </div>
                    <dt class="about-dt">Egg Cycle</dt>
                    <dd class="pokemon-egg-cycle about-dd" data-id="${id}"></dd>
                  </dl>
                </section>
                <section class="description-section d-none" data-id="${id}">
                  <h5>Description of <span class="pokemon-name-big text-capitalize text-center" data-id="${id}"></span> in following languages:</h5>
                  <div class="d-flex py-3 justify-content-center">
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="English">
                      <img class="flag english flag-active" src="./icons/english-flag.png" alt="english-flag" data-id="${id}" onclick="pokemonLanguages('${id}','english')">
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="German">
                      <img class="flag german" src="./icons/german-flag.png" alt="german-flag" data-id="${id}" onclick="pokemonLanguages('${id}','german')">
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="Spanish">
                      <img class="flag spanish" src="./icons/spain-flag.png" alt="spain-flag" data-id="${id}" onclick="pokemonLanguages('${id}','spanish')">
                      </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="French">
                      <img class="flag french" src="./icons/french-flag.png" alt="french-flag"data-id="${id}"  onclick="pokemonLanguages('${id}','french')">      
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="Italian">
                      <img class="flag italian" src="./icons/italian-flag.png" alt="italian-flag" data-id="${id}" onclick="pokemonLanguages('${id}','italian')">
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="Japanese">
                      <img class="flag japanese" src="./icons/japan-flag.png" alt="japan-flag" data-id="${id}" onclick="pokemonLanguages('${id}','japanese')">
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="Koren">
                      <img class="flag koreanish" src="./icons/korean-flag.png" alt="korean-flag" data-id="${id}" onclick="pokemonLanguages('${id}','koreanish')">
                    </button>
                    <button type="button" class="btn btn-outline-dark p-0 rounded-1" data-id="${id}" data-bs-toggle="tooltip" data-bs-title="Chinesisch">
                      <img class="flag chinesisch" src="./icons/china-flag.png" alt="china-flag" data-id="${id}" onclick="pokemonLanguages('${id}','chinesisch')">
                    </button>
  
  
                  </div>
  
                  <div class="description-section-list">
                    <div class="description-section-english" data-id="${id}">
                    </div>
                    <div class="description-section-german d-none" data-id="${id}">
                    </div>
                    <div class="description-section-spanish d-none" data-id="${id}">
                    </div>
                    <div class="description-section-french d-none" data-id="${id}">
                    </div>
                    <div class="description-section-italian d-none" data-id="${id}">
                    </div>
                    <div class="description-section-japan d-none" data-id="${id}">
                    </div>
                    <div class="description-section-korean d-none" data-id="${id}">
                    </div>
                    <div class="description-section-china d-none" data-id="${id}">
                    </div>
                  </div>
                </section>
                <section class="pokemon-languages d-none" data-id="${id}">
                  <h5>The name of <span class="pokemon-name-big text-capitalize text-center" data-id="${id}"></span> in other languages:</h5>
                  <dl class="pokemon-languages-content" data-id="${id}"></dl>
                </section>
                <section class="pokemon-stats container-sm d-none" data-id="${id}">
                  <h4>A list of base stat values for this Pokémon.</h4>
                  <div class="pokemon-stats-content" data-id="${id}">
                  </div>
                </section>
                <section class="pokemon-evolution d-none" data-id="${id}">
                  <div class="pokemon-name-evolution"></div>
                  <h3>Evolution Chain</h3>
                    <div class="no-evolution" data-id="${id}"></div>
                  <div class="evolution-section-first" data-id="${id}">
  
                    <div class="evolution-single">
                      <img loading="lazy" class="img-defult-name-evolution" data-id="${id}" src="" alt="" srcset="" />
                      <div class="defult-name-evolution" data-id="${id}"></div>
                    </div>
  
                    <img loading="lazy" class="icon-arrow" src="./icons/arrow-narrow-right.svg" alt="arrow-right">
                      
                    <div class="evolution-single">
                      <img loading="lazy" class="img-first-name-evolution" data-id="${id}" src="" alt="" srcset="" />
                      <div class="first-name-evolution" data-id="${id}"></div>
                    </div>
                  </div>
  
                  <div class="evolution-section-second" id="show-pokemon-evolution" data-id="${id}">
                    
                    <div class="evolution-single">
                      <img loading="lazy" class="img-first-name-evolution" data-id="${id}" src="" alt="" srcset="" />
                      <div class="first-name-evolution" data-id="${id}"></div>
                    </div>
                    
                    <img loading="lazy" class="icon-arrow" src="./icons/arrow-narrow-right.svg" alt="arrow-right">
                    
                    <div class="evolution-single">
                      <img loading="lazy" class="img-second-name-evolution" data-id="${id}" src="" alt="" srcset="" />
                      <div class="second-name-evolution" data-id="${id}"></div>
                    </div>
                  </div>
                    
                </section>
                <section class="pokemon-moves d-none" data-id="${id}">
                  <div class="pokemon-moves-content" data-id="${id}">
                  </div>
                </section>
                <section class="growth-rate d-none" data-id="${id}">
                  <h5>The rate at which this Pokémon species gains levels.</h5>
  
                  <dl class="growth-rate-dl">
                    
                    <dt class="growth-rate-dt">Growth rate:</dt>
                    <dd class="growth-rate-content-dd" data-id="${id}"></dd>
                    </dl>
                  <div class="growth-rate-list">
                    <dl>
                    <dt class="growth-rate-dt">The list of levels:</dt>
                      <dd class="all-growth-rate-content-dd" data-id="${id}"></dd>
                    </dl>
                  </div>
                </section>
                <section class="other-pictures container-sm d-none" data-id="${id}">
                  <h5>You can find <span class="amount-of-pictures" data-id="${id}"></span> different pictures from <span class="pokemon-name-big text-capitalize" data-id="${id}"></span></picture> </h3>
                  <div class="other-pictures-list row" data-id="${id}">
                  </div>
                </section>
              </div>
              <div class="confirmation rounded-5" data-id="${id}">
                </div>
                </div>
            </div>
            </div>
    ` 
  }
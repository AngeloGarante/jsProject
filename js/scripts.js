let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    function add(pokemon) {
        typeof pokemon === "object" && "name" in pokemon && "detailsUrl" in pokemon ? pokemonList.push(pokemon) : console.log("Please impunt the right data (must contain name and detail keyword!");
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonIndex = document.querySelector(".pokemon-index");
        let indexPokeLi = document.createElement("li");
        let buttonPoke = document.createElement("button");
        buttonPoke.addEventListener("click", showDetails(pokemon));
        buttonPoke.innerText = pokemon.name;
        buttonPoke.classList.add("button-index");
        indexPokeLi.appendChild(buttonPoke);
        pokemonIndex.appendChild(indexPokeLi);
    }


    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json()
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            crossOriginIsolated.error(e);
        })
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            console.log(pokemon);
        })
    }


    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
    }

})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});




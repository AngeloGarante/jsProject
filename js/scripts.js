let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    function add(pokemon) {
        if (typeof pokemon === "object" && "name" in pokemon && "detailsUrl" in pokemon) { pokemonList.push(pokemon) }
    };
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonIndex = document.querySelector(".list-unstyled");
        let indexPokeListed = document.createElement("li");
        indexPokeListed.classList.add(".group-list-item");
        let buttonPoke = document.createElement("button");
        buttonPoke.classList.add(".button");
        buttonPoke.innerText = pokemon.name;
        buttonPoke.setAttribute("data-toggle", "modal");
        buttonPoke.classList.add("btn")
        buttonPoke.setAttribute("data-target", "#pokemon-modal");
        indexPokeListed.appendChild(buttonPoke);
        pokemonIndex.appendChild(indexPokeListed);
        buttonPoke.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
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
            pokemon.types = details.types.map((type) => type.type.name).join(',');
            pokemon.abilities = details.abilities.map((ability) => ability.ability.name).join(",");
            pokemon.weight = details.weight;
        }).catch(function (e) {
            crossOriginIsolated.error(e);
        })
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            showModal(pokemon);
        });

    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');


        modalTitle.empty();
        modalBody.empty();


        let nameElement = $(`<h1>${pokemon.name}</h1>`);
        let imageElement = $('<img class="modal-img" />');
        imageElement.attr('src', pokemon.imageUrl);
        let heightElement = $(`<p>Height: ${pokemon.height}</p>`);
        let weightElement = $(`<p>weight: ${pokemon.weight}</p>`);
        let abilityElement = $(`<p>abilities: ${pokemon.abilities}</p>`);
        let typesElement = $(`<p>types: ${pokemon.types}</p>`);

        // append pokemon elements to modal
        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(abilityElement);
        modalBody.append(typesElement);

    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        showDetails: showDetails,
    }
})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});




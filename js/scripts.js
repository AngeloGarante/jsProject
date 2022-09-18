let pokemonRepository = (function () {
    let pokemonList = [
        {//height values meters , weight value kg.
            name: "Gengar",
            height: 1.5,
            type: "shadow/poison",
            weight: 40.5,
        },
        {
            name: "Snorlax",
            height: 2.10,
            type: "normal",
            weight: "450 kg",
        },
        {
            name: "magmar",
            height: 1.3,
            type: "fire",
            weight: 44.5,
        }
    ];
    function add(item) {
        item !== "object" ? alert("You should add a Pokemon as object") : pokemonList.push(item);

    }

    function getAll() {
        return pokemonList;
    }
    function addListitem(pokemon) {
        let pokemonIndex = document.querySelector(".pokemon-index");
        let indexPoke = document.createElement("li");
        let buttonPoke = document.createElement("button");
        buttonPoke.addEventListener("click", showDetails(pokemon));
        buttonPoke.innerText = pokemon.name;
        buttonPoke.classList.add("button-index");
        indexPoke.appendChild(buttonPoke);
        pokemonIndex.appendChild(indexPoke);

    }
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        add: add,
        getAll: getAll,
        addListitem: addListitem
    }

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListitem(pokemon);

});





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


    return {
        add: add,
        getAll: getAll
    }

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(`name: ${pokemon.name} (height: ${pokemon.height} meter) ${pokemon.height > 1.7 ? "wow this pokemon is really big!" : ""} <br>`);
});





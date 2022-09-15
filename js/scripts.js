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
]

for (i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i]
    const height = pokemon.height
    /*  if (height > 1.7) {
          document.write(`${pokemon.name} (height ${height} meter) this guys is a big one <br>`)
      }
      else { document.write(`${pokemon.name} (height ${height})<br>`) }
      */
    document.write(`${pokemon.name} (height ${height} meter) ${height > 1.7 ? "this guys is a big one" : ""} <br>`)
}
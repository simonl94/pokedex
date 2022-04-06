export async function getPokemonList() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => res.json());
        return data.results;
}

export async function getPokemonDescription(pokedexEntryNumber) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokedexEntryNumber}`).then((res) => res.json());
        return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

export async function getPokemonSprite(pokedexEntryNumber) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexEntryNumber}.png`
}


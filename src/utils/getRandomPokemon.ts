
const MAX_DEX_COUNT = 5;

export const getRandomPokemon: (notThisOne?: number) =>
    number = (notThisOne?: number) => {
        const pokemonId = Math.floor(Math.random() * MAX_DEX_COUNT) + 1;

        if (pokemonId !== notThisOne) return pokemonId;
        return getRandomPokemon(notThisOne)
    }


export const getOptionForVote = () => {
    const firstId = getRandomPokemon();
    const secondId = getRandomPokemon(firstId);

    return [firstId, secondId];
}
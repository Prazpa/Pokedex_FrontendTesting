import axios from 'axios';

export const POKEMON_BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemon = async () => {
    try {
        const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=151&offset=0`);
        const pokemonNamesList = response.data.results;

        const pokemonDetailsList = await Promise.all(
            pokemonNamesList.map(async (pokemon) => {
                const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${pokemon.name}`);
                return response.data;
            })
        );

        return {
            pokemonNamesList,pokemonDetailsList
        };
    } catch (error) {
        console.error(error);
    }
};

export default fetchPokemon;

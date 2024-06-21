import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import fetchPokemon from '../fetchpokemon';
import { NameContext } from '../../App';

export const POKEMON_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

function PokemonColumn() {
    const { setValue } = useContext(NameContext);
    const { data } = useContext(NameContext);
    const [pokeSearch, setPokeSearch] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const fetchData = async () => {
        const { pokemonDetailsList } = await fetchPokemon();
        setPokemonDetails(pokemonDetailsList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const textFind = data.trim().toLowerCase();
        if (textFind.length > 1) {
            const filtered = pokemonDetails.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(textFind)
            );
            setPokeSearch(filtered);
        } else {
            setPokeSearch([]);
        }
    }, [data, pokemonDetails]);

    const linkStyle = "w-full h-[120px] ml-[100px] mr-[60px] my-[14px] flex flex-col cursor-pointer shadow rounded-tl-sm rounded-tr-sm";

    const pokemonListToShow = pokeSearch.length > 0 ? pokeSearch : pokemonDetails;

    if (data.trim().length > 10) {
        return (
            <div className="w-full h-auto my-[30px] flex-col justify-center items-center gap-2 flex">
                <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 15 15">
                        <path fill="none" stroke="currentColor" d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" className='absolute my-[-55px] mx-[6px] text-neutral-400'>
                        <path fill="currentColor" d="m12.12 10l3.53 3.53l-2.12 2.12L10 12.12l-3.54 3.54l-2.12-2.12L7.88 10L4.34 6.46l2.12-2.12L10 7.88l3.54-3.53l2.12 2.12z" />
                    </svg>
                </div>


                <div className="text-center text-neutral-400 text-base font-normal font-['Inter'] leading-tight">
                    Oops! Nothing was found for "{data.trim()}"
                    <br />
                    Please try to search for something else.
                </div>
            </div>
        );
    }


    return (
        <div>
            {pokemonListToShow.map((pokemon) => (
                <Link key={pokemon.id} to={`/detail/${pokemon.name}`} className={linkStyle} onClick={() => setValue(pokemon)}>
                    <div className="justify-start items-center inline-flex">
                        <div className="w-20 h-[80px]">
                            <img className="m-[14px] w-[80px] h-[80px]" src={`${POKEMON_IMG_URL}/${pokemon.id}.png`} alt={pokemon.name} />
                        </div>
                        <div className="mx-[14px] flex-col justify-start items-start flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <span className="text-neutral-700 text-base font-bold capitalize">{pokemon.name}</span>
                                <div className="justify-start items-start gap-1 inline-flex">
                                    {pokemon.types.map((type, typeIndex) => (
                                        <div key={typeIndex} className="px-2 py-1 bg-yellow-50 rounded-lg justify-center items-center gap-2.5 flex">
                                            <span className="text-amber-400 text-xs font-bold capitalize">{type.type.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-stone-500 text-xs font-light capitalize">
                                    Abilities: {pokemon.abilities.map((ability, abilityIndex) => (
                                        <span key={abilityIndex}>{ability.ability.name}{abilityIndex < pokemon.abilities.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PokemonColumn;

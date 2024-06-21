import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import fetchPokemon from '../fetchpokemon';
import { NameContext } from '../../App';

export const POKEMON_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

function Pokemongrid() {
    const { setValue, data, pokeSearch, setPokeSearch } = useContext(NameContext);
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
    }, [data, pokemonDetails, setPokeSearch]);

    const containerStyle = "ml-[100px] mr-[60px] my-[30px] gap-[46px] grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ";
    const linkStyle = "w-full px-6 py-2 bg-neutral-700 hover:bg-yellow-400 hover:border-4 hover:border-orange-100 rounded-lg justify-center items-center inline-flex";

    const pokemonListToShow = pokeSearch.length > 0 ? pokeSearch : pokemonDetails;

    if (data.trim().length > 10) {
        return (
            <div className={containerStyle}>
                {pokemonListToShow.map((pokemon) => (
                    <div key={pokemon.id} className="w-auto h-[378px] shadow flex-col justify-center items-center flex">
                        <div className="w-[250px] h-[250px] bg-white rounded-tl-lg rounded-tr-lg">
                            <img className="w-[250px] h-[250px]" src={`${POKEMON_IMG_URL}/${pokemon.id}.png`} alt={pokemon.name} />
                        </div>
                        <div className="w-[250px] h-[128px] px-2.5 my-3 bg-neutral-50 rounded-lg flex-col justify-start items-start gap-4 flex">
                            <div className="flex-col justify-start items-start flex">
                                <div className="text-zinc-700 text-base font-bold capitalize">
                                    <span>{pokemon.name}</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {pokemon.types.map((type, i) => (
                                        <div key={i} className="px-2 py-1 bg-yellow-50 rounded-lg justify-center items-center gap-2.5 flex">
                                            <span className="text-amber-400 text-xs font-bold capitalize">{type.type.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link to={`/detail/${pokemon.name}`} onClick={() => setValue(pokemon)} className={linkStyle}>
                                <span className="text-center text-white group-hover:text-black text-sm font-bold">Detail</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>);
    }

    return (
        <div className={containerStyle}>
            {pokemonListToShow.map((pokemon) => (
                <div key={pokemon.id} className="w-[250px] h-[378px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[250px] h-[250px] bg-white rounded-tl-lg rounded-tr-lg">
                        <img className="w-[250px] h-[210px]" src={`${POKEMON_IMG_URL}/${pokemon.id}.png`} alt={pokemon.name} />
                    </div>
                    <div className="w-[250px] h-[128px] px-2.5 my-3 bg-neutral-50 rounded-lg flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-zinc-700 text-base font-bold capitalize">
                                <span>{pokemon.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {pokemon.types.map((type, i) => (
                                    <div key={i} className="px-2 py-1 bg-yellow-50 rounded-lg justify-center items-center gap-2.5 flex">
                                        <span className="text-amber-400 text-xs font-bold capitalize">{type.type.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to={`/detail/${pokemon.name}`} onClick={() => setValue(pokemon)} className={linkStyle}>
                            <span className="text-center text-white group-hover:text-black text-sm font-bold">Detail</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Pokemongrid;

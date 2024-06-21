import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { POKEMON_BASE_URL } from '../PokemonList/fetchpokemon';
import { POKEMON_IMG_URL } from '../PokemonList/style/Pokemongrid';
import { NameContext } from '../App';
import axios from 'axios';
import { StoreContext } from '../App';

function Detail() {
  const { value } = useContext(NameContext);
  const { addToPocket, setAddToPocket } = useContext(StoreContext);
  const [pokemon, setPokemon] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [picked, setPicked] = useState(false);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${value.name}`);
      const dataPokemon = response.data;
      setPokemon(dataPokemon);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [value.name]);

  const handlePick = () => {
    if (!picked && pokemon) {
      const newPocket = [...addToPocket, { ...pokemon, quantity }];
      setAddToPocket(newPocket);
      setPicked(true);
    }
  };

  return (
    <div className="ml-[100px] mr-[60px] py-[30px] flex flex-col">
      <div className="w-full h-[18px] justify-start items-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76" />
        </svg>
        <Link to={'/'}>
          <span className='text-neutral-700 text-base font-semibold hover:underline'>Back</span>
        </Link>
      </div>

      <div className='my-[22px]'>
        {pokemon && (
          <div className="w-full h-[385px] py-[16px] bg-white rounded-2xl gap-[100px] flex">
            <div className='w-[353px] h-[353px] flex justify-center self-center'>
              <img className="w-[314.93px] h-[294.17px] flex justify-center self-center" src={`${POKEMON_IMG_URL}/${pokemon.id}.png`} alt='pokemon' />
            </div>

            <div className="w-[687px] h-[250px] gap-3.5 inline-flex flex-col">
              <span className="text-neutral-700 text-base font-bold capitalize">{pokemon.name}</span>
              <div className='flex gap-2.5'>
                {pokemon.types.map((type, i) => (
                  <div key={i} className="px-2 py-1 bg-yellow-50 rounded-lg">
                    <span className="text-amber-400 text-xs font-bold capitalize">{type.type.name}</span>
                  </div>
                ))}
              </div>

              <div className="justify-start items-start gap-[13px] inline-flex pr-[50px]">
                <span className="w-[55px] text-neutral-700 text-sm font-light">Stats:</span>
                <span className="text-neutral-700 text-sm font-light">
                  hp: {pokemon.stats[0].base_stat},
                  attack: {pokemon.stats[1].base_stat},
                  defense: {pokemon.stats[2].base_stat},
                  special-attack: {pokemon.stats[3].base_stat},
                  special-defense: {pokemon.stats[4].base_stat},
                  speed: {pokemon.stats[5].base_stat}
                </span>
              </div>

              <div className="flex gap-[13px]">
                <span className="text-neutral-700 text-sm font-light">Abilities:</span>
                <div className="text-neutral-700 text-sm font-light capitalize">
                  {pokemon.abilities.map((ability, abilityIndex) => (
                    <span key={abilityIndex}>
                      {ability.ability.name}{abilityIndex < pokemon.abilities.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-[253.86px] h-[38px] flex items-center gap-[60px]">
                <span className="text-neutral-700 text-sm font-normal">Quantity:</span>
                <div className='w-[128px] h-[38px] border border-black rounded-xl flex justify-center items-center'>
                  <button className="w-[37px] h-[36px] flex justify-center items-center" onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>
                    <span className="text-neutral-700 text-lg font-medium">-</span>
                  </button>
                  <div className='bg-[#F5F5F5] w-[53px] h-[36px] flex justify-center items-center'>
                    <span className="text-center text-lg font-medium">{quantity}</span>
                  </div>
                  <button className="w-[37px] h-[36px] flex justify-center items-center" onClick={() => { setQuantity(quantity + 1) }}>
                    <span className="text-neutral-700 text-lg font-medium">+</span>
                  </button>
                </div>
              </div>

              <div className='w-[254px] h-[50px] px-15 py-3 gap-2 bg-red-400 hover:bg-red-600 rounded-lg inline-flex justify-center items-center cursor-pointer' onClick={handlePick}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="text-white">
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1m-1 6v-2m-6 2v-2" />
                      <path d="M4 12c0-1.886 0-2.828.586-3.414C5.172 8 6.114 8 8 8h8c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13z" />
                    </g>
                  </svg>
                </div>

                <button className='w-auto flex justify-center items-center'>
                  <span className='text-stone-50 text-sm font-semibold'>Add to pocket</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;

import React from 'react';
import AsidePokemon from '../component/AsidePokemon';
import NavbarPokemon from '../component/NavbarPokemon';
import Detail from './Detail';
import Footer from '../component/Footer';

function PokemonDetail() {
  return (
    <div>
      <AsidePokemon />
      <NavbarPokemon />
      <div className='w-full h-[500px] bg-[#FAFAFA]'>
        <Detail/>
      </div>
      <Footer/>
    </div>
  );
}

export default PokemonDetail;

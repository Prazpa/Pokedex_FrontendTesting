import React from 'react'
import AsidePokemon from '../component/AsidePokemon'
import NavbarPokemon from '../component/NavbarPokemon'
import PokemonCard from '../PokemonList/PokemonCard'
import Footer from '../component/Footer'

function PokemonList() {
    return (
        <div>
            <AsidePokemon/>
            <NavbarPokemon/>
            <div className='w-auto h-auto min-h-[500px]'>
                <PokemonCard/>
            </div>
            <Footer/>
        </div>
    )
}

export default PokemonList
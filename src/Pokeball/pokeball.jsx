import React from 'react'
import AsidePokemon from '../component/AsidePokemon'
import NavbarPokemon from '../component/NavbarPokemon'
import PokeDetail from './PokeDetail'
import Footer from '../component/Footer'

export default function pokeball() {
    return (
        <div>
            <AsidePokemon />
            <NavbarPokemon />
            <div className='w-full min-h-[500px] h-auto bg-[#FAFAFA] ' >
                <PokeDetail />
            </div>
            <Footer/>
        </div>
    )
}

import React, { useState, useContext } from 'react';
import Pokemongrid from './style/Pokemongrid';
import PokemonColumn from './style/PokemonColumn';
import { NameContext } from '../App';

function PokemonCard() {
    const { pokeSearch, data } = useContext(NameContext);

    const [isLeftClicked, setIsLeftClicked] = useState(true);
    const [isRightClicked, setIsRightClicked] = useState(false);

    const handleLeftClick = () => {
        setIsLeftClicked(true);
        setIsRightClicked(false);
    };

    const handleRightClick = () => {
        setIsRightClicked(true);
        setIsLeftClicked(false);
    };

    const buttonLStyle = "p-2 rounded-tl-md rounded-bl-md justify-start items-start gap-2.5 flex";
    const buttonRStyle = "p-2 rounded-tr-md rounded-br-md justify-start items-start gap-2.5 flex";
    const menuStyle = "w-full h-8 pl-[100px] pr-[60px] justify-between items-center inline-flex";

    return (
        <div className='py-[40px]'>
            {/* Menu */}
            <div className={menuStyle}>
                <div className="text-neutral-700 text-base font-semibold">
                    {data.trim() === '' ? (
                        <span>Products (151)</span>
                    ) : (
                        <span>Search Result ({pokeSearch.length} Product{pokeSearch.length !== 1 && 's'})</span>
                    )}
                </div>
                <div className="justify-start items-start flex">
                    <div className={`${buttonLStyle} ${isLeftClicked ? 'bg-yellow-400' : 'bg-stone-50'}`} onClick={handleLeftClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M7.5 11A1.5 1.5 0 0 1 9 12.5v4A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5v-4A1.5 1.5 0 0 1 3.5 11zm9 0a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-9-10A1.5 1.5 0 0 1 9 3.5v4A1.5 1.5 0 0 1 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4A1.5 1.5 0 0 1 3.5 2zm9 0A1.5 1.5 0 0 1 18 3.5v4A1.5 1.5 0 0 1 16.5 9h-4A1.5 1.5 0 0 1 11 7.5v-4A1.5 1.5 0 0 1 12.5 2zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5" />
                        </svg>
                    </div>
                    <div className={`${buttonRStyle} ${isRightClicked ? 'bg-yellow-400' : 'bg-stone-50'}`} onClick={handleRightClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.437 11H5.565a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5M5.565 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Zm12.872 16.872H5.565a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5v2.934a2.5 2.5 0 0 1-2.5 2.502M5.565 14a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Pokemon Cards */}
            {isLeftClicked ? <Pokemongrid/> : <PokemonColumn/>}
        </div>
    );
}

export default PokemonCard;
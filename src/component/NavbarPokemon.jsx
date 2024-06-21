import React, { useContext, useState, useEffect } from 'react';
import { NameContext, StoreContext } from '../App';
import { Link } from 'react-router-dom';

function NavbarPokemon() {
    const { addToPocket } = useContext(StoreContext);
    const { setData } = useContext(NameContext);
    
    const handleInputChange = (e) => {
        setData(e.target.value);
    };

    const logoPath = "/src/assets/logo.webp";
    const groupStyle = "flex items-center gap-1.5 hover:underline";
    const borderStyle = "border border-r-black-800 border-l-0 border-t-0 border-b-0";
    const inputStyle = "w-[520px] h-12 bg-stone-50 rounded-[10px] pl-9 text-stone-500 text-sm font-normal";
    const containerStyle = "w-full h-[80px] pl-[70px] pr-[56px] md:inline-flex sm:grid sm:grid-cols-3 items-center justify-between shadow ";
    const pocketStyle = "w-[18px] h-[18px] flex items-center justify-center rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs";

    return (
        <div className={containerStyle}>
            <Link to={'/'} className='w-[210px] flex justify-center '>
                <img src={logoPath} alt="logo" className='w-[156px] h-[57px] md:w-auto' />
            </Link>

            <div className="relative">
                <input
                    id="name"
                    name="name"
                    autoComplete="on"
                    className={inputStyle}
                    type="text"
                    placeholder="Search name Pokémon ..."
                    onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 left-[16px] flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="text-yellow-400">
                        <g fill="none" fillRule="evenodd">
                            <path d="M24 0v24H0V0z" />
                            <path
                                fill="currentColor"
                                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <div className='flex'>
                <div className={`w-[150px] justify-center ${groupStyle} ${borderStyle}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="text-yellow-400">
                        <g fill="none" stroke="currentColor" strokeDasharray="28" strokeDashoffset="28" strokeLinecap="round" strokeWidth="2">
                            <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0" />
                            </path>
                            <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path>
                        </g>
                    </svg>
                    <span className='text-stone-500 text-base'>Username</span>
                </div>
                <Link to={'/pokeball'} className={`w-[100px] justify-end ${groupStyle}`}>
                    <div className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="text-yellow-400">
                            <g fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1m-1 6v-2m-6 2v-2" />
                                <path d="M4 12c0-1.886 0-2.828.586-3.414C5.172 8 6.114 8 8 8h8c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13z" />
                            </g>
                        </svg>
                        <div className={pocketStyle}>{addToPocket.length}</div>
                    </div>
                    <span className='text-stone-500 text-base'>Pocket</span>
                </Link>
                </div>
        </div>
    );
}

export default NavbarPokemon;

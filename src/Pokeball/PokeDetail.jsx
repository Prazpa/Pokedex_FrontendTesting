import React, { useContext } from 'react';
import { StoreContext } from '../App';
import { POKEMON_IMG_URL } from '../PokemonList/style/Pokemongrid';

function PokeDetail() {
    const { addToPocket, setAddToPocket } = useContext(StoreContext);

    const handleDelete = (index) => {
        const newPocket = addToPocket.filter((_, i) => i !== index);
        setAddToPocket(newPocket);
    };

    return (
        <div className='w-full h-auto pl-[70px] gap-[30px] flex py-[30px]'>
            {/* Pocket list */}
            <div className="w-[75%] h-auto px-6 py-4 bg-white rounded-lg flex-col justify-start items-start inline-flex">
                <span className="text-neutral-700 text-base font-bold justify-start items-start gap-2.5 inline-flex">Pocket list ({addToPocket.length})</span>
                <table className='table-auto w-full self-stretch py-6 bg-white rounded-lg gap-2.5 overflow-y-scroll'>
                    <thead>
                        <tr>
                            <th className='text-neutral-700 text-sm font-bold text-left w-[60%]'>Product name</th>
                            <th className='text-neutral-700 text-sm font-bold text-left w-[15%]'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addToPocket.map((pokemonItem, index) => (
                            <tr key={index}>
                                <td>
                                    <div className='h-[96px] flex gap-[20px] relative'>
                                        <img src={`${POKEMON_IMG_URL}/${pokemonItem.id}.png`} alt="pokemon" className='w-[80px] h-[80px]' />
                                        <div className='flex flex-col'>
                                            <span className='capitalize'>{pokemonItem.name}</span>
                                            <div className='flex gap-2.5'>
                                                {pokemonItem.types.map((type, i) => (
                                                    <div key={i} className="py-0.5 px-2.5 bg-yellow-50 rounded-lg">
                                                        <span className="text-amber-400 text-xs font-bold capitalize">{type.type.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 w-[150px] h-[96px] flex items-center justify-between'>
                                    <span>{pokemonItem.quantity}</span>
                                    <button onClick={() => handleDelete(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Order summary */}
            <div className="w-[20%] h-60 bg-white rounded-lg shadow flex-col gap-3.5 inline-flex overflow-y-scr0ll">
                <div className="self-stretch p-2.5 bg-yellow-50 justify-start items-start gap-2.5 inline-flex">
                    <span className="text-neutral-700 text-base font-bold">Order Summary</span>
                </div>

                <div className="w-full p-2.5">
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span className='text-neutral-700 text-base font-bold'>{addToPocket.length} Product</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Quantity</span>
                        <span className='text-neutral-700 text-base font-bold'>{addToPocket.reduce((total, item) => total + item.quantity, 0)} Quantity</span>
                    </div>
                </div>

                <button className="self-center my-[50px] w-[85%] h-[50px] py-4 bg-red-400 justify-center items-center gap-2 flex rounded-lg">
                    <span className="text-stone-50 text-sm font-semibold capitalize">Proceed to checkout</span>
                </button>

            </div>
        </div>
    );
}

export default PokeDetail;

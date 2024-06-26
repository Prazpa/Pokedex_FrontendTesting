import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetail from './PokemonDetail/PokemonDetail';
import Pokeball from './Pokeball/pokeball';


export const StoreContext = createContext({});
export const NameContext = createContext({});

function App() {
  const [addToPocket, setAddToPocket] = useState([]);
  const [value, setValue] = useState('')
  const [data, setData] = useState('')
  const [pokeSearch, setPokeSearch] = useState([]);

  return (

    <Router>
      <NameContext.Provider value={{ value, setValue, data, setData, pokeSearch, setPokeSearch }}>
        <StoreContext.Provider value={{ addToPocket, setAddToPocket }}><Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/detail/:name" element={<PokemonDetail />} />
          <Route path="/pokeball" element={<Pokeball />} />
        </Routes></StoreContext.Provider>
      </NameContext.Provider>
    </Router>
  );
}

export default App;

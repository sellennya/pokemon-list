import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import App from '../App';
import { FavoriteContext } from '../context/FavoriteContext';
import PokemonFavorites from './PokemonFavorites';
import Pokemon from './Pokemon';

export default function PokemonRoutes() {
  const [favorite, setFavorite] = useState([]);

  return (
    <BrowserRouter>
      <FavoriteContext.Provider
        value={{
          favorite,
          setFavorite,
        }}
      >
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/pokemon/:id' element={<PokemonDetails />}></Route>
          <Route
            path='/pokemon/favorites'
            element={<PokemonFavorites />}
          ></Route>
        </Routes>
      </FavoriteContext.Provider>
    </BrowserRouter>
  );
}

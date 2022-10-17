import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import App from '../App';
import { FavoriteContext } from '../contexts/FavoriteContext';
import PokemonFavorites from './PokemonFavorites';

export default function PokemonRoutes() {
  const [favorite, setFavorite] = useState(() => {
    const localData = localStorage.getItem('value');
    return localData ? JSON.parse(localData) : [];
  });

  return (
    <BrowserRouter>
      <FavoriteContext.Provider value={{ favorite, setFavorite }}>
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

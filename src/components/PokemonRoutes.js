import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import App from '../App';
import { FavoriteContext } from '../contexts/FavoriteContext';
import PokemonFavorites from './PokemonFavorites';

export default function PokemonRoutes() {
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(pokemons);
  };

  const updateFavoritePokemons = (favoritePokemon) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(favoritePokemon);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(favoritePokemon);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  return (
    <BrowserRouter>
      <FavoriteContext.Provider
        value={{ favorites, updateFavoritePokemons, loadFavoritePokemons }}
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

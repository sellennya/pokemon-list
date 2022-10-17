import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../contexts/FavoriteContext';

export default function PokemonDetails() {
  const { id } = useParams();
  const [ready, setReady] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState([
    {
      title: '',
      image: null,
      ability: '',
      type: '',
      height: 0,
      weight: 0,
      moves: '',
      games: 0,
    },
  ]);
  const { updateFavoritePokemons } = useContext(FavoriteContext);

  const handleResponse = (response) => {
    setReady(true);
    setSinglePokemon({
      title: response.data.name,
      image: response.data.sprites.front_default,
      ability: response.data.abilities[0].ability.name,
      type: response.data.types[0].type.name,
      height: response.data.height,
      weight: response.data.weight,
      moves: response.data.moves[0].move.name,
      games: response.data.game_indices[0].game_index,
    });
  };

  useEffect(() => {
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    axios.get(`${apiUrl}/${id}`).then(handleResponse);
  }, [id]);

  if (ready) {
    return (
      <Card style={{ width: '20rem' }} className='mx-auto mt-5'>
        <Card.Body>
          <Card.Title className='text-center'>{singlePokemon.title}</Card.Title>
          <img
            src={singlePokemon.image}
            alt={singlePokemon.title}
            className='rounded mx-auto d-block'
          />

          <div className='text-center'>
            <div>Ability: {singlePokemon.ability}</div>
            <div>Type: {singlePokemon.type}</div>
            <div>Height: {singlePokemon.height}</div>
            <div>Weight: {singlePokemon.weight}</div>
            <div>Moves: {singlePokemon.moves}</div>
            <div>Games: {singlePokemon.games}</div>
            <Link to={'/pokemon/favorites'}>
              <Button
                className='mt-3'
                onClick={() => {
                  updateFavoritePokemons(singlePokemon);
                }}
              >
                Add to Favorites
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return 'Loading...';
  }
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading';
import './Pokemon.css';
import PokemonNavbar from './PokemonNavbar';

export default function Pokemon(props) {
  const [pokemons, setPokemons] = useState([]);
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setReady(true);
    setPokemons(response);
  }

  useEffect(() => {
    let endpoints = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    for (let index = 1; index < 21; index++) {
      endpoints.push(`${apiUrl}/${index}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(handleResponse);
  }, []);

  if (ready) {
    return (
      <div className='Pokemon'>
        <h1 className='my-5'>Pokémon List</h1>
        <PokemonNavbar />
        <Container>
          <Row>
            {pokemons.map((pokemon, id) => {
              return (
                <Col xs={3} key={id}>
                  <PokemonCard pokemon={pokemon.data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <ReactLoading
        type='spokes'
        color='#0B5ED7'
        height={'15%'}
        width={'15%'}
        className='loading'
      />
    );
  }
}

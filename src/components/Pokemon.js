import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading';
import './Pokemon.css';
import PokemonNavbar from './PokemonNavbar';
import PokemonPagination from './PokemonPagination';

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [ready, setReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(20);

  // Change page
  const onPageClick = (pageNumber) => setCurrentPage(pageNumber);

  // handle response from API
  const handleResponse = (response) => {
    setReady(true);
    setPokemons(response);
  };

  useEffect(() => {
    let endpoints = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    for (let index = 1; index < 200; index++) {
      endpoints.push(`${apiUrl}/${index}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(handleResponse);
  }, []);

  // Get current page
  const indexOfLastPage = currentPage * pokemonsPerPage;
  const indexOfFirstPage = indexOfLastPage - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPage, indexOfLastPage);

  if (ready) {
    return (
      <div className='Pokemon'>
        <div className='container'>
          <img
            src={require('../assets/pokeapi_logo.png')}
            alt={'logo'}
            className='Pokemon-image my-5'
          />
          <PokemonNavbar />
          <Container>
            <PokemonPagination
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={pokemons.length}
              onPageClick={onPageClick}
            />
            <Row>
              {currentPokemons.map((pokemon, id) => {
                return (
                  <Col xs={3} key={id}>
                    <PokemonCard pokemon={pokemon} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
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

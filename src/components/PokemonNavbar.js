import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function PokemonNavbar() {
  return (
    <Container>
      <Navbar expand='lg' variant='light' bg='light' className='my-3'>
        <Container>
          <Navbar.Brand href='/pokemon/favorites'>Favorites</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

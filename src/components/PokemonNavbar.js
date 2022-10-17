import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function PokemonNavbar() {
  return (
    <Container>
      <Navbar expand='lg' variant='light' bg='light' className='my-3'>
        <Container>
          <Navbar.Brand href='/pokemon/favorites'>Favorites</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

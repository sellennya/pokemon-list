import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>{pokemon.data.name}</Card.Title>
        <Card.Img variant='top' src={pokemon.data.sprites.front_default} />
        <Link to={`/pokemon/${pokemon.data.id}`}>
          <Button variant='primary'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

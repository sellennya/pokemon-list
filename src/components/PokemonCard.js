import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function PokemonCard(props) {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>{props.pokemon.name}</Card.Title>
        <Card.Img variant='top' src={props.pokemon.sprites.front_default} />
        <Link to={`/pokemon/${props.pokemon.id}`}>
          <Button variant='primary'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

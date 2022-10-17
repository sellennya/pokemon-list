import PokemonNavbar from './PokemonNavbar';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function PokemonFavorites() {
  const { favorite } = useContext(FavoriteContext);

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className='PokemonFavorites'>
      <PokemonNavbar />

      <Container>
        <Card style={{ width: '15rem' }} className='mt-5'>
          <Card.Body>
            <Card.Title className='text-center'>{favorite.title}</Card.Title>
            <img
              src={favorite.image}
              alt={favorite.title}
              className='rounded mx-auto d-block'
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

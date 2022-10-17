import PokemonNavbar from './PokemonNavbar';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';

export default function PokemonFavorites() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className='PokemonFavorites'>
      <PokemonNavbar />
      <Container>
        <Row>
          {favorites.map((favoritePokemon, index) => {
            return (
              <Col xs={4} key={index}>
                <Card className='mt-4'>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      {favoritePokemon.title}
                    </Card.Title>
                    <img
                      src={favoritePokemon.image}
                      alt={favoritePokemon.title}
                      className='rounded mx-auto d-block'
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

import PokemonNavbar from './PokemonNavbar';
import { Container } from 'react-bootstrap';
import { FavoriteContext } from '../context/FavoriteContext';
import { useContext } from 'react';

export default function PokemonFavorites() {
  return (
    <div>
      <PokemonNavbar />
      <Container></Container>
    </div>
  );
}

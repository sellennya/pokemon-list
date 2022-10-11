import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonPagination({
  totalPokemons,
  pokemonsPerPage,
  onPageClick,
}) {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalPokemons / pokemonsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber} className='page-item'>
              <Link
                to={'/'}
                onClick={() => onPageClick(pageNumber)}
                className='page-link'
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

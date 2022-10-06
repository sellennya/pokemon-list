import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function PokemonPagination() {
  let active = 1;
  let pages = [];
  for (let index = 1; index <= 5; index++) {
    pages.push(
      <Pagination.Item key={index} active={index === active}>
        {index}
      </Pagination.Item>
    );
  }
  return (
    <div className='PokemonPagination'>
      <Pagination>{pages}</Pagination>
    </div>
  );
}

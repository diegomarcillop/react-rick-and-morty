import React from 'react';

import './CardCharacter';

export const  CardCharacter = ({ data }) => {

  return (
    <div className='card-character'>
      <img className='card-character__image' src={data?.image} alt='img-character' />
      <h1 className='card-character__name'>{data?.name}</h1>
      <h2 className='card-character__status'>
        <i
          className={`fas fa-circle ${
            data?.status === 'Dead' ? 'dead' : data?.status === 'Alive' ? 'alive' : ''
          }`}
        />
        {" "}{data?.species}
      </h2>
      <p className='card-character__origin'>{data?.origin.name}</p>
    </div>
  );
};

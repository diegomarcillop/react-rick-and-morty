import React from 'react';

import './CardCharacter';

export const  CardCharacter = ({ data }) => {
  const { name, image, species, status, origin } = data;

  return (
    <div className='card-character'>
      <img className='card-character__image' src={image} alt='img-character' />
      <h1 className='card-character__name'>{name}</h1>
      <h2 className='card-character__status'>
        <i
          className={`fas fa-circle ${
            status === 'Dead' ? 'dead' : status === 'Alive' ? 'alive' : ''
          }`}
        />
        {" "}{species}
      </h2>
      <p className='card-character__origin'>{origin.name}</p>
    </div>
  );
};

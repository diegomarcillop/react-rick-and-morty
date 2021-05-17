import React from 'react';

import './CardCharacter';

export const  CardCharacter = ({ data }) => {
  const { name, image, species, status, origin } = data;

  return (
    <div className='card'>
      <img src={image} alt='img-character' />
      <h1>{name}</h1>
      <h2>
        <i
          className={`fas fa-circle ${
            status === 'Dead' ? 'dead' : status === 'Alive' ? 'alive' : 'ssss'
          }`}
        />
        {status} - {species}
      </h2>
      <p>{origin.name}</p>
    </div>
  );
};

import React from 'react';
import Character from 'components/Character/Character';
import './CharacterList.css';

function CharacterList({ character }) {
  if (character) {
    return (
      <div className='character_list'>
        {character.map((data, index) => {
          return <Character data={data} key={index} />;
        })}
      </div>
    );
  } else {
    return <p className='message'>No se cargaron los datos</p>;
  }
}

export default CharacterList;

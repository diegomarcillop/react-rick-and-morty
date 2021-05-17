import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CardCharacter } from 'components/CardCharacter/CardCharacter';

export const ListCharacter = ({ character, handlePagination }) => {
  if (character) {
    return (
      <InfiniteScroll
        dataLength={character.length}
        next={handlePagination}
        hasMore={true}
        loader={<h4 className="loading-scroll">Cargando ...</h4>}
      >
        <div className='character_list'>
          {character?.map((data, index) => {
            return <CardCharacter data={data} key={index} />;
          })}
        </div>
      </InfiniteScroll>
    );
  };
  return <p className='message'>No se cargaron los datos</p>
};

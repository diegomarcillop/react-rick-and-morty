import React, { useState, useEffect } from 'react';

import api from 'common/api';
import NameImage from '../../assets/img/name.png';
import { ListCharacter } from 'components/ListCharacter/ListCharacter';
import { Searcher } from 'components/Searcher/Searcher';
import { search } from 'services/fuse';
import { DividerTitle } from 'components/DividerTitle/DividerTitle';

export const Home = () => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [result, setResult] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiRest = async () => {
      const { results  } = await api.get('character', { page });
      if (results){  
        let newCharacters = characters.concat(results);
        setCharacters(newCharacters);
      }
    };
    apiRest();
  }, [page]);

  useEffect(() => {
    handleSearch();
  }, [query]);

  const handleSearch = async () => {

    let newResult = search(characters, ['name', 'species'], query);
    newResult = newResult.map((character) => character.item);

    setResult(newResult.length === 0 ? null : newResult);
  };

  const handlePagination = () => {
    setPage(page + 1);
  };

  return (
    <div className="home scroll-custom">
      <img className="home__image-name" src={NameImage} />
      <Searcher onSearch={({currentTarget}) => setQuery(currentTarget.value)} valueSearch={query} />
      <div className="home__section-list">
        <DividerTitle title="List of characters" />
        <ListCharacter
          character={result || characters}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

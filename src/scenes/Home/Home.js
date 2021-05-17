import React, { useState, useEffect } from 'react';

import api from 'common/api';
import NameImage from '../../assets/img/name.png';
import { ListCharacter } from 'components/ListCharacter/ListCharacter';
import { Searcher } from 'components/Searcher/Searcher';
import { search } from 'services/fuse';
import { DividerTitle } from 'components/DividerTitle/DividerTitle';

export const Home = () => {
  const [query, setQuery] = useState("");
  const [character, setCharacter] = useState([]);
  const [result, setResult] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiRest = async () => {
      const { results } = await api.get('character', page);
      let newCharacters = character.concat(results);
      setCharacter(newCharacters);
      return result;
    };

    apiRest();
  }, [page, result]);

  const onSearch = ({currentTarget}) => {
    let result = search(character, ['name', 'species'], query);
    result = result.map((character) => character.item);

    setResult(result.length === 0 ? null : result);
    setQuery(currentTarget.value);
  };

  const handlePagination = () => {
    setPage(page + 1);
  };

  return (
    <div className="home scroll-custom">
      <img className="home__image-name" src={NameImage} />
      <Searcher onSearch={(e) => onSearch(e)} valueSearch={query} />
      <div className="home__section-list">
        <DividerTitle title="Character" />
        <ListCharacter
          character={result || character}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

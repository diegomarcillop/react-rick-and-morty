import React, { useState, useEffect } from "react";
import api from "common/api";
import CharacterList from "components/Character/CharacterList/CharacterList";
import Searcher from "components/Searcher/Searcher";
import { search } from "services/fuse";
import Pagination from "components/Pagination/Pagination";

function CharacterPage() {
  const [query, setQuery] = useState("");
  const [character, setCharacter] = useState(null);
  const [result, setResult] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(page);
    apiREST();
  }, [page]);

  const apiREST = async () => {
    const { results } = await api.get("character", page);
    setCharacter(results);
    return result;
  };

  const onSearch = ({ currentTarget }) => {
    setQuery(currentTarget.value);
    let result = search(character, ["name", "species"], query);
    result = result.map((character) => character.item);
    setResult(result);
    return result;
  };

  const handlePagination = ({currentTarget}) => { 
    const event = currentTarget.className; 
    setPage((state) => {
      return event ==="next" ? state + 1 : state -1 ;
    });
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    setQuery('');
  };

  return (
    <>
      <Searcher onSearch={onSearch} query={query} />
      <h2 className="title_2">Characters</h2>
      <CharacterList
        character={result === null || query.length === 0 ? character : result}
      />
      <Pagination handlePagination={handlePagination}  page={page}/>
    </>
  );
}
export default CharacterPage;

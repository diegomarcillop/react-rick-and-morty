import React, { useState, useEffect }  from 'react';
import api from "common/api";
import CharacterList from 'components/Character/CharacterList/CharacterList';
import Searcher from 'components/Searcher/Searcher';
import { search } from 'services/fuse';

function CharacterPage(){

    const [query, setQuery] = useState('');
    const [character, setCharacter] = useState(null);
    const [result, setResult]  = useState(null);
    
    useEffect(() => {
      apiREST();
    }, []);
  
    const apiREST = async () => {
      const { results } = await api.get("character/");
       setCharacter(results);
    }; 

    const onSearch = ({ currentTarget}) => {
        setQuery(currentTarget.value);
        let result = search(character, ["name", "species"], query);
        result = result.map( character => character.item);
        console.log(result);
        setResult(result);
    } 

    return(
        <>
        <Searcher onSearch={onSearch} query={query}/>
        <CharacterList character={result===null || query.length === 0 ?  character: result}/>
        </>
    )
}
export default CharacterPage;
import React from 'react';
import './Searcher.css';

function Searcher({ onSearch, query }) {
  return (
    <div className='searcher' id='searcher'>
      <input volue={query} onChange={onSearch} spellCheck='false' />
      <button>
        <i className='fas fa-search' />
      </button>
    </div>
  );
}
export default Searcher;

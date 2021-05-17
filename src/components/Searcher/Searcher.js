import React from 'react';

export const Searcher = ({ onSearch, valueSearch }) => {
  return (
    <div className='searcher'>
      <input placeholder="Find a character" className="searcher__input" value={valueSearch} onChange={onSearch} spellCheck='false' />
      <i className='searcher__icon fas fa-search' />
    </div>
  );
};

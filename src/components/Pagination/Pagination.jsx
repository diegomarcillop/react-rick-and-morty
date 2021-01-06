import React from 'react';
import './Pagination.css';

export default function Pagination({ handlePagination, page }) {
  return (
    <div className='pagination'>
      {page !== 1 && (
        <button className='previous' onClick={handlePagination}>
          <i className='fas fa-angle-left' />
        </button>
      )}
      <button className='next' onClick={handlePagination}>
        Next Page
      </button>
    </div>
  );
}

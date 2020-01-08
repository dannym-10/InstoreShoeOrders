import React from 'react'
import './Pagination.scss';

function Pagination ({totalOrders, theOrdersPerPage, paginateOrders, currentPage}) {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / theOrdersPerPage); i++) {
    totalPageNumbers.push(i);
  }
  console.log(totalPageNumbers);

  return (
    <div className='Pagination-wrapper'>
      <ul className='pagination-pages'>
        {totalPageNumbers.map(page => (
          <li key={page}>
            <a href='#' onClick={() => paginateOrders(page)}>
              <span className={`page-bullet ${currentPage === page ? 'active' : '' }`} />
            </a>
          </li>
        ))}
      </ul>
      <div className='pages-out-of'>
        <p className='number-1'>{currentPage}</p>
        <span className='separator' />
        <p className='number-2'>{totalPageNumbers.length}</p>
      </div>
    </div>
  )
}

export default Pagination;
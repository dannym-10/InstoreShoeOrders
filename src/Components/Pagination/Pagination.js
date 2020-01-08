import React from 'react'

function Pagination ({totalOrders, theOrdersPerPage}) {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / theOrdersPerPage); i++) {
    totalPageNumbers.push(i);
  }
  console.log(totalPageNumbers);

  return (
    <div className='Pagination-wrapper'>
      <ul>
        {totalPageNumbers.map(page => (
          <li key={page}>
            <a href='#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;
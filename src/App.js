import React, { useState, useEffect } from 'react';
import './App.scss';
import './Styles/cssReset.scss';
import store from './store';
import Filters from './Components/Filters';
import ItemsList from './Components/ItemList'; 
import Pagination from './Components/Pagination'; 

function App () {
  const [theOrders, setTheOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(4);

  useEffect(() => {
    setIsLoading(true);
    setTheOrders(store.shoeList);
    setIsLoading(false);
  }, []);

  const getLastOrderIndex = ordersPerPage * currentPage;
  const getFirstOrderIndex = getLastOrderIndex - ordersPerPage;
  const currentOrders = theOrders.slice(getFirstOrderIndex, getLastOrderIndex);

  const paginate = (pn) => setCurrentPage(pn);

  return (
    <div className='App'>
      <div className='app-container'>
        <Filters />
        <ItemsList loading={isLoading} items={currentOrders} />
        <Pagination totalOrders={theOrders.length} theOrdersPerPage={ordersPerPage} paginateOrders={paginate} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default App;

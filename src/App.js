import React, { useState, useEffect } from 'react';
import './App.scss';
import './Styles/cssReset.scss';
import store from './store';
import Filters from './Components/Filters';
import ItemsList from './Components/ItemList';

function App () {
  const [theOrders, setTheOrders] = useState([]);
  // const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    setTheOrders(store.shoeList);
  }, []);

  const getOrder = () => {
    return theOrders;
  }

  return (
    <div className='App'>
      <div className='app-container'>
        <Filters />
        <ItemsList items={getOrder()} />
      </div>
    </div>
  )
}

export default App;

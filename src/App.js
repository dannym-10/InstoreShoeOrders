import React, { useState, useEffect } from 'react';
import './App.css';
import store from './store';
import ItemsList from './Components/ItemList';

function App () {
  const [theOrders, setTheOrders] = useState([])

  useEffect(() => {
    setTheOrders(store.shoeList);
  }, []);

  return (
    <div className='App'>
      <ItemsList items={theOrders} />
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import store from './store';
import ItemsList from './Components/ItemsList';

function App () {
  const [theOrders, setTheOrders] = useState([])

  useEffect(() => {
    setTheOrders(store.shoeList)
  }, [])

  console.log(store)

  return (
    <div className='App'>
      <ItemsList items={theOrders} />
    </div>
  )
}

export default App

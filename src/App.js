import React, { useState, useEffect } from 'react';
import './App.scss';
import './Styles/cssReset.scss';
import store from './store';
import FilterButton from './Components/FilterButton';
import ItemsList from './Components/ItemList'; 
import Pagination from './Components/Pagination';

function App () {
  const [theOrders, setTheOrders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(4);
  const [filterReady, setFilterReady] = useState(false);
  const [filterOnWay, setFilterOnWay] = useState(false);
  const [filterInQueue, setFilterInQueue] = useState(false);
  const [filterOutOfStock, setfilterOutOfStock] = useState(false);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    setTheOrders(store.shoeList);
    setFilteredData(filteredData);
    setIsLoading(false);
  }, [filteredData]);

  useEffect(() => {
    if (seconds <= 3) {
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setSeconds(1);
      if (currentPage === (Math.ceil(theOrders.length / ordersPerPage))) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
  }, [seconds]);
  
  const getLastOrderIndex = ordersPerPage * currentPage;
  const getFirstOrderIndex = getLastOrderIndex - ordersPerPage;

  const toggleFilterReady = () => {
    setFilterReady(filterReady => !filterReady);
    if (filterReady) {
      const filteredReadyData = filteredData.filter(order => {
        return (order.status.includes('ready'));
      });
      setTheOrders(filteredReadyData);
    }
  }

  const toggleFilterOnWay = () => {
    setFilterOnWay(filterOnWay => !filterOnWay);
    if (filterOnWay) {
      const filteredOnWayData = filteredData.filter(order => {
        return (order.status.includes('otw'));
      });
      setTheOrders(filteredOnWayData);
    }
  }

  const toggleFilterInQueue = () => {
    setFilterInQueue(filterInQueue => !filterInQueue);
    if (filterInQueue) {
      const filteredQueueData = filteredData.filter(order => {
        return (order.status.includes('queue'));
      });
      setTheOrders(filteredQueueData);
    }
  }

  const toggleFilterNoStock = () => {
    setfilterOutOfStock(filterOutOfStock => !filterOutOfStock);
    if (filterOutOfStock) {
      const filteredOosData = filteredData.filter(order => {
        return (order.status.includes('oos'));
      });
      setTheOrders(filteredOosData);
    }
  }

  const currentOrders = theOrders.slice(getFirstOrderIndex, getLastOrderIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <div className='app-container'>
        <div className='Filters-wrapper'>
          <FilterButton filterLabel='ready to try' status='ready' updateReadyState={(value) => toggleFilterReady(value)} />
          <FilterButton filterLabel='on the way' status='otw' updateOtwState={(value) => toggleFilterOnWay(value)} />
          <FilterButton filterLabel='in the queue' status='queue' updateQueueState={(value) => toggleFilterInQueue(value)} />
          <FilterButton filterLabel='out of stock' status='oos' updateOosState={(value) => toggleFilterNoStock(value)} />
        </div>
        <ItemsList loading={isLoading} items={currentOrders} />
        <Pagination totalOrders={theOrders.length} theOrdersPerPage={ordersPerPage} paginateOrders={paginate} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import Table from './components/Table';

import './App.css';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderType, setOrderType] = useState('asc');

    const url = 'https://services.odata.org/TripPinRESTierService/(S(3jgtctz5a2wyzb0gi3pxikvb))/People';

  const sort = (orderBy) => {
    setIsLoading(true);

    let parameters = `?$orderby=${orderBy}%20${orderType}`;

    fetch(
        `${url}${parameters}`
    )
        .then(response => response.json())
        .then(response => {
            setData(response.value);
            setIsLoading(false);
        });

    if(orderType ==='asc') {
        setOrderType('desc');
    }

    if(orderType === 'desc') {
        setOrderType('asc');
    }
  }


  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setData(response.value)
      setIsLoading(false);
    });
  }, [])

  return (
      <div className="">
          {isLoading ? (
              <Loader />
          ) : (
              <Table
                  sort={sort}
                  data={data}
                  headings={[
                      { label: 'Username', field: 'UserName' },
                      { label: 'First Name', field: 'FirstName' },
                      { label: 'Last Name', field: 'LastName' },
                      { label: 'Gender', field: 'Gender' }
                  ]}
              />
          )}
      </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);


  const abortController = new AbortController();
  console.log('abortController', abortController)
  //fetch the request from api

  //show error in the UI
  //we want to display the data - done
  //we want show loading when it is fetching


  async function fetchData() {
    try {

      const response = await fetch(url, {
        //pass this abort signal to fetch
        signal: abortController.signal
      })
      // console.log(response.data)
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch Request was cancelled')
      } else {
        setError('An eror occured while fetching data');
        setLoading(false);
      }

    }
  }
  function handleFetchClick() {
    setIsFetching(true);

  }
  function handleCancelClick() {
    setIsFetching(false);

  }

  useEffect(() => {
    if (isFetching) {
      fetchData()
    }
    //cleanup function to abort the request when the component unmounts or isFetching becomes false
    return () => {
      abortController.abort();
    }

  }, [isFetching])
  return (
    <div>
      <h1>Data Fetching</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {users.length > 0 && (
        <div>
          <h1>User List</h1>
          <ul> {users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))} </ul>

        </div>
      )}
      {!isFetching ? (
        <button onClick={handleFetchClick} >Fetch Data</button>
      ) : (
        <button onClick={handleCancelClick}>Cancel Fetch</button>
      )}



    </div>
  )
}

export default App
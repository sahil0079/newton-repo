import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    //fetch the request from api

    //show error in the UI
    //we want to display the data - done
    //we want show loading when it is fetching


    async function fetchData() {
        try {

            const response = await axios.get(url)
            // console.log(response.data)
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            setError('An eror occured while fetching data');
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <div> Error: {error} </div>
    }


    return (
        <div>
            <h1>User List</h1>
            <ul> {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))} </ul>
        </div>
    )
}

export default App
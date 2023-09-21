import React, { useState } from 'react';
import axios from 'axios';


function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleInputChange(value, setState) {
    setState(value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      // const requestBody = {
      //   name,
      //   email
      // };
      const requestBody = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', requestBody)

      console.log('User Created:', response.data);
    } catch (error) {
      console.error('Error creating User', error)
    }


  }

  console.log('user', { name, email })
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e) => handleInputChange(e.target.value, setName)} />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => handleInputChange(e.target.value, setEmail)} />
        </div>
        <button type='submit'>Create User</button>
      </form>

    </div>
  )
}

function App() {
  return (
    <div><CreateUser /></div>
  )
}

export default App
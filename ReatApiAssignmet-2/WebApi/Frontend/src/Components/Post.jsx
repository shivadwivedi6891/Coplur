import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [createdUser, setCreatedUser] = useState(null);

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://localhost:5157/User', {
        name,
        password
      });
      setCreatedUser(response.data); // show result
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  return (
    <div>
      <h2>HttpPost</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create</button>

      {createdUser && (
        <div>
          <h3>Created User</h3>
          <p><strong>Name:</strong> {createdUser.name}</p>
          <p><strong>Password:</strong> {createdUser.password}</p>
        </div>
      )}
    </div>
  );
}

export default CreateUser;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5157/User/GetAll")  
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);



  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5157/User/GetAll`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div>
      <h2>User List</h2>

      <button  onClick = {fetchUser}>Gett All User</button>
       <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}   <br/> <strong>Password:</strong> {user.password}   <br></br>  <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

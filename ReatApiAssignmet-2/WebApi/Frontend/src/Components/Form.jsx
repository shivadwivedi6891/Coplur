// import React ,{useEffect,useState} from 'react'


// const Form = () => {

//      const [form, setForm] = useState({ Name: '', Password: '' });
//   const [status, setStatus] = useState('');

//   const loadData = () => {
//     fetch('http://localhost:5157/User/id?id=1')
//       .then((res) => res.json())
//       .then((data) => setForm(data))
//       .catch((err) => setStatus('Error fetching data'));
//   };

//    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:5157/User/id?id=1', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//       .then((res) => res.json())
//       .then((data) => setStatus('Submitted: ' + JSON.stringify(data.data)))
//       .catch((err) => setStatus('Error: ' + err.message));
//   };



//   return (
//     <div>
//       <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>User Profile</h1>
//       <button onClick={loadData} style={{ marginBottom: '10px' }}>Show Data</button>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
//         <label>First Name:</label>
//         <input name="Name" value={form.Name} onChange={handleChange} />

       
//         <label>password:</label>
//         <input name="Password" type="email" value={form.emailId} onChange={handleChange} />

//         <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
//       </form>

//       {status && <p style={{ marginTop: '20px' }}>{status}</p>}
//     </div>
//     </div>
//   )
// }

// export default Form



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5157/User/id?id=1`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
        <h2>HttpGet</h2>
      <h2>Get User by ID</h2>
     
      <button onClick={fetchUser}>Show Data</button>

      {user && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Password:</strong> {user.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;

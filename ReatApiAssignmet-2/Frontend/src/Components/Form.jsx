import React ,{useEffect,useState} from 'react'


const Form = () => {

     const [form, setForm] = useState({ firstName: '', lastName: '', username: '', emailId: '' });
  const [status, setStatus] = useState('');

  const loadData = () => {
    fetch('http://localhost:5000/api/form')
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => setStatus('Error fetching data'));
  };

   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setStatus('Submitted: ' + JSON.stringify(data.data)))
      .catch((err) => setStatus('Error: ' + err.message));
  };



  return (
    <div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User Profile</h1>
      <button onClick={loadData} style={{ marginBottom: '10px' }}>Show Data</button>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>First Name:</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} />

        <label>Last Name:</label>
        <input name="lastName" value={form.lastName} onChange={handleChange} />

        <label>Username:</label>
        <input name="username" value={form.username} onChange={handleChange} />

        <label>Email ID:</label>
        <input name="emailId" type="email" value={form.emailId} onChange={handleChange} />

        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

      {status && <p style={{ marginTop: '20px' }}>{status}</p>}
    </div>
    </div>
  )
}

export default Form

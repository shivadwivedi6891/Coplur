import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <Header/>

      <main className="main-content" style={{ textAlign: 'center', padding: '20px' }}>
        <img src="/vite.svg" alt="Vite logo" width="40" />
        <img src="/react.svg" alt="React logo" width="40" />
        <h1>Vite + React</h1>
        <button>count is 0</button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </main>

     <Footer/>
    </>
  );
}


export default App

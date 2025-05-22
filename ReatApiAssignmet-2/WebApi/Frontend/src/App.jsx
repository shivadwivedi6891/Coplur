import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import UserList from './Components/user'
import CreateUser from './Components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Form/>
    <UserList/>
    <CreateUser/>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Compoonents/Counter'
import EmpUnControlledComp from './Compoonents/EmpUnControlledComp'
import EmpControlledComponent from './Compoonents/EmpControlledComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <EmpUnControlledComp/>
      <EmpControlledComponent/>
    </>
  )
}

export default App

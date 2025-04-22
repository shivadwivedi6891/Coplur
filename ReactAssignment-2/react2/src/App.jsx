import { useState } from 'react'


import './App.css'
import StudentTable from './Components/StudentTable'

function App() {
 

  const students = [
    { name: "Shiva", marks: { Math: 99, Science: 98, English: 98 } },
    { name: "Nitin", marks: { Math: 74, Science: 88, English: 81 } },
    { name: "Sohel", marks: { Math: 90, Science: 91, English: 85 } },
    { name: "Akhilesh", marks: { Math: 66, Science: 72, English: 78 } },
    { name: "Akhil", marks: { Math: 95, Science: 89, English: 94 } },
    { name: "Shivam", marks: { Math: 82, Science: 76, English: 88 } },
    { name: "Abhishek", marks: { Math: 40, Science: 45, English: 34 } },
    { name: "Pawan", marks: { Math: 88, Science: 84, English: 90 } },
    { name: "Anubhav", marks: { Math: 76, Science: 80, English: 79 } },
    { name: "Rahul", marks: { Math: 92, Science: 95, English: 91 } }
  ];

  return (
    <>
      <h1>students details</h1>
      <StudentTable students= {students}/>
    </>
  )
}

export default App

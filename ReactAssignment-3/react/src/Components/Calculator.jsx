import React from 'react'

import { useState } from 'react'
// import css
import './Calculator.css'

const Calculator = () => {


    const [value , setValue] = useState('')

  return (
<>
    <h1>Calculator</h1>
    <div className='container'>

      <div className="calculator">  
        
        <form action = "">

            <div className="display">
            <input type="text" style ={{width:"270px"}} className='input'   value = {value} />
            </div>

            <div >
                <input type="button" style ={{background:"red",width:"60px"}} value="AC" onClick={e=>setValue('')} />
                <input type="button" style = {{width:"60px"}} value="DE" onClick={e=>setValue(value.slice(0,-1))} />
                <input type="button" style = {{width:"60px"}} value="." onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="/" onClick={e=>setValue(value + e.target.value)} />

            </div>

            <div>
                <input type="button"  style = {{width:"60px"}}  value="7" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="8" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="9" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="*" onClick={e=>setValue(value + e.target.value)} />

            </div>

            <div>
                <input type="button" style = {{width:"60px"}} value="4" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="5" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="6" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" style = {{width:"60px"}} value="+" onClick={e=>setValue(value + e.target.value)} />

            </div>

            <div className='btn-cal' >
                <input type="button"  value="1" onClick={e=>setValue(value + e.target.value)} />
                <input type="button"  value="2" onClick={e=>setValue(value + e.target.value)} />
                <input type="button"  value="3" onClick={e=>setValue(value + e.target.value)} />
                <input type="button"  value="-" onClick={e=>setValue(value + e.target.value)} />

            </div>
             

            <div className='btn-cal'>
                <input type="button"  value="00" onClick={e=>setValue(value + e.target.value)} />
                <input type="button"  value="0" onClick={e=>setValue(value + e.target.value)} />
                <input type="button"  value="^2" onClick={e=>setValue(value*value)} />
                <input type="button" style = {{background:"aqua",width:"60px"}} value="=" onClick={e=>setValue(eval(value))} />
               

            </div>


        </form>

        </div>
      
    </div>

    </>
  )
}

export default Calculator

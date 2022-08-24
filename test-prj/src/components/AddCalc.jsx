import React from 'react'
import { useState } from 'react'

function AddCalc() {
    const [num1, setNum1] = useState()    //"" is only used for strings
    const [num2, setNum2] = useState()
    const [total, setTotal] = useState(0)

    const calcSum = () => {
        setTotal(num1 + num2);
    }

  return (
    <div>
        <h2>Add two Numbers</h2>
        <p>Mini addition calculator</p>
        <input 
            type="number" 
            placeholder='Enter First number'
            value={num1}
            onChange= {(e) => setNum1(+e.target.value)}
        />

        <input 
            type="number" 
            placeholder='Enter Second number'
            value={num2}
            onChange= {(e) => setNum2(+e.target.value)}
        />

        <button onClick={calcSum} >Add your two numbers</button>

        <h3>Total:{total}</h3>
    </div>
  )
}

export default AddCalc
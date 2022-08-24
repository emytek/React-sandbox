import React from 'react'
import { useState } from 'react'
import Parent from './components/Parent'

function Toggle() {
    //'Display and Show the Toggle element😊'
  const[show, setShow] = useState(false)
  const[value, setValue] = useState("")
    
  const handleShow = () => {
    setShow(show => !show);
    console.log("button clicked!")
  }

  return (
    <div>
        <button 
            onClick={handleShow} 
            className='like-button'>
            {show ? 'Hide the toggle element😒' : 'Display and Show the Toggle element😊'}
        </button>

        {/* disabled button */}
        <h4>Button disable:</h4>
        <input onChange={(e) => setValue(e.target.value)} />
        <button type='submit' disabled={value.length < 1}>Submit Here</button>

        {show && <div>Toggle is working 👍...</div>}

        {/* two way data binding */}
        <h3>Input: </h3>
        <input 
            type="text" 
            value = {value}
            placeholder='Enter text here...'
            onChange={(e) => setValue(e.target.value)}
        />
        <p>{value}</p>
        <Parent />
    </div>
  )
}

export default Toggle
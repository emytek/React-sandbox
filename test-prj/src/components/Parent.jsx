import React from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {
    const [view, setView] = useState("I need to updated from my child component")

  return (
    <div>
        <h3>Parents and child relationship through props</h3>
        {view}
        <Child setView={setView} />
    </div>

  )
}

export default Parent
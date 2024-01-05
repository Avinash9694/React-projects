import React, { useState } from 'react'

const ShortCircuit = () => {
    const [val,setVal] = useState(true)
    
    function handleClick(){
        setVal(!val)
    }
    
  return (
    <div>
        {val && <p>Short circuit</p>}
        {val || <p>ciruit</p>}
       {val ? <p>Hello user</p> : <p>Please login</p>}
        <button onClick={handleClick}>click me</button>
    </div>

  )
}

export default ShortCircuit
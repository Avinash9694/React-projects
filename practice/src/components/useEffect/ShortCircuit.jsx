import React, { useState } from 'react'

const ShortCircuit = () => {
    const [val,setVal] = useState(true)
    
    function handleClick(){
        setVal(!val)
    }
    console.log(val)
  return (
    <div>
        {val && <p>Short circuit</p>}
        {val || <p>ciruit</p>}
       
        <button onClick={handleClick}>click me</button>
    </div>

  )
}

export default ShortCircuit
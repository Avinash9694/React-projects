import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(c=> c + 1 )
    }
  return (
  <>
    <p>{count}</p>
    <button className='btn' onClick={handleClick}>Increment</button>
    </>
  )
}

export default Counter
import React, { useState } from 'react'
import { Person } from './MockData'
const ObjectExample = () => {
    const [res,setRes] = useState(Person[0])
    const [number,setNumber]=useState(0)
    function handleClick(){
      setRes(Person[number])
        let randomNumber = Math.floor(Math.random()*4)
        setNumber(randomNumber)
    }
   
  return (
    <div>
      <p>{res.name}</p>
      <p>{res.age}</p>
      <p>{res.hobby}</p>
    <button onClick={handleClick}>show {Person[number].name}</button>
    </div>
  )
}

export default ObjectExample
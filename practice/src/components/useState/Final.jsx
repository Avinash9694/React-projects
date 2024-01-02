import React, { useState } from 'react'
import { arr } from './MockData'
const Final = () => {
  const [res,setRes]=useState(arr)

  function handleClick(id){
    const updatedarr = res.filter((data)=>
    data.id!==id)
    setRes([...updatedarr])
  }

  function Clear(){
    setRes([])
  }
  const items = res.map((data)=>
    <div key={data.id}>
    <p>{data.name}</p>
    <button onClick={()=>handleClick(data.id)} className='btn'>remove</button>
    </div>
  )
  return (
    <div>
      {items}
      <button onClick={Clear}>Clear all</button>
    </div>
  )
}

export default Final
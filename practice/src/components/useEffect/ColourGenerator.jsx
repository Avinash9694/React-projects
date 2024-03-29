import React, { useState } from 'react'
import SingleColor from './SingleColour'

import Values from 'values.js'

function ColourGenerator() {
  const [color, setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#222').all(10))

  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      let colors =  new Values(color).all(10)
      setList(colors)
    }
    catch(err){
      setError(true)
      console.log(err)
    }
    
  }

  return (
    <>
    <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="#f15025" className={`${error ? 'error' : null}`} onChange={(e)=>setColor(e.target.value)}/>
      <button className='btn' type='submit' >submit</button>
    </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
      return <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
      })}
    </section>
    </>
  )
}

export default ColourGenerator

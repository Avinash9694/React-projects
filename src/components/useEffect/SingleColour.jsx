import React, { useState, useEffect } from 'react'


const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(()=>{
    const timeout= setTimeout(() => {
      setAlert(false)
    }, 3000);

    clearTimeout(timeout)
  },[alert])
  return (
  <article onClick={()=>
  {setAlert(!alert)
   navigator.clipboard.writeText(hexValue)}}
   className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
   <p className='percent-value'>{weight}%</p>
   <p className='color-value'>{hexValue}</p>
   { alert && <p>copied to clipboard</p>}
    </article>
    )
}

export default SingleColor

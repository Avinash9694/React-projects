import React, { useState } from 'react';
const Tours = ({id,image,info,name,price,remove}) => {
  const [readmore,setReadmore] =useState(true)
  return(
  <div>
    <img src={image} alt={image} />
    <h4>{name}</h4>
    <h4>{price}</h4>
    <p className="tour-info">{readmore?`${info.substring(0,200)}...`:info}</p>
    <p onClick={()=> setReadmore(!readmore)}>{readmore?'Readmore':"show less"}</p>
    <button onClick={()=>remove(id)}>not interested</button>
  </div>
  )
};

export default Tours;

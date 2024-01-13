import React, { useState, useEffect } from 'react'
import Tours from './Tours'


function Tour() {
  const url = 'https://course-api.com/react-tours-project'
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData =async ()=>{
    const response =await fetch(url)
    const data1 =await response.json()
    setData(data1)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
console.log(data)

  const remove = (id)=>{
    let newData=data.filter((value)=> value.id!==id)
    setData(newData)
    
  }
  return (
  
  <div>
{loading ? <div>loading</div>: data.map((data) => {
  return(
    <Tours key={data.id} {...data} remove={remove} />
  )
 })
}
  </div>

  )
}

export default Tour

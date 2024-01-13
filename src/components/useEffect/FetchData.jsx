import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data,setData]=useState([])

    const fetchfunc = async ()=>{
         const data1 =await fetch("https://api.github.com/users")
         const data2=await data1.json()
       
         setData(data2);
    }

    useEffect(()=>{
        fetchfunc();
    },[])
    
    const result = data.map((data3)=>{
        return (
        <div key={data3.id}>
        <p>{data3.login}</p>
        <img style={{width:50}} src={data3.avatar_url} alt={data3.avatar_url}/>
        </div>
        )
    })
  return (
    <div>{result}</div>
  )
}

export default FetchData
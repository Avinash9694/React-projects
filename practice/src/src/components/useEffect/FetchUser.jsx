import React, { useEffect, useState } from 'react'

const FetchUser = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        const fetchUserData=async()=>{
        const response = await fetch("https://api.github.com/users/caged")
        const data = await response.json()
        setUser(data)
        }
        fetchUserData()
    },[])

    
  return (
    <div>
        <img src={user.avatar_url} alt={user.avatar_url}/>
        <h1>{user.bio}</h1>
    </div>
  )
}

export default FetchUser
import React, { useState } from 'react'

const UserLogin = () => {
    const [user,setUser] = useState(null)
    const [val,setVal]=useState(false)
    function handleClick(){
        if(!val){
            setUser({name:"John Doe",age:30})
        }
        else{
            setUser(null)
        }
        setVal(!val);

    }
  return (
    <div>
        {val?<div>
            <p>hello {user.name}</p>
            <button onClick={handleClick}>logout</button></div>
        :<div>
            <p>please login</p>
            <button onClick={handleClick}>login</button></div>}
    </div>
  )
}

export default UserLogin
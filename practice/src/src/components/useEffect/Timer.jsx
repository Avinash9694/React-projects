import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [toggle,setToggle]=useState(false)
    
  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <RandomComponent/> }
    </div>
  )
}

const RandomComponent = ()=>{
    const [tens, setTens] = useState(0);
    const [ones, setOnes] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setOnes((prevOnes) => {
          if (prevOnes === 9) {
            setTens((tens) => (tens === 5 ? 0 : tens + 1));
            return 0;
          }
          return prevOnes + 1;
        });
      }, 1000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once on mount
  
    return (
      <div >
        <button>{tens}</button>
        <button>{ones}</button>
      </div>
    );
    }
export default Timer
import React, { useEffect, useState } from 'react'

const Effect = () => {



    const [count , setCount] = useState(0)

    useEffect(()=>{
       console.log('Effect called...');
        
    },[count])

  return (
    <>
    <h2>Count : {count}</h2>

    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Effect
import React, { useMemo, useState } from 'react'





const UseMemo = () => {



    const [num , setNum] = useState(0) ;
    const [count , setCount] = useState(0) ;


    function fac(num){

        if(num ===0 || num ===1) return num ;
    
        return num * fac(num -1) ;
    }
    
    const facMemo = useMemo(()=>{
    
        console.log('useMemo called')
        return fac(num)
    },[num])
    
    const increment = ()=>{
        setCount(count +1)
    }

  return (
    <>
    <h3>Value : {facMemo}</h3>
    <h3>Count : {count}</h3>

    <input type="text" onChange={(e)=>setNum(Number(e.target.value))} />
    <button onClick={increment}>increment</button>
    </>
  )
}

export default UseMemo
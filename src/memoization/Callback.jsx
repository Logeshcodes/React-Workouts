import React, { useCallback, useState } from 'react'

const Callback = () => {

    const [ count , setCount ] = useState(0);
    const [ num , setNum ] = useState(0);


    const increment = useCallback(()=>{
        console.log('usecallback called')
        setCount(count + 1) ;
    },[count])

    const increment2 = ()=>{
        setNum(num + 1)
    }


  return (
    <>
    <h3>{count}</h3>
    <h3>{num}</h3>

    <button onClick={increment}>count</button>
    <button onClick={increment2}>Num</button>
    </>
  )
}

export default Callback
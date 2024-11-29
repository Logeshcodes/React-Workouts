import React, { useState } from 'react'


function useCounter(initialCount){

    const [ count , setCount] = useState(initialCount);

    const increment = ()=>{
        setCount(count+1)
    }
    const reset = ()=>{
        setCount(0)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

    return {increment , decrement , reset , count} ;

}

const CustomHook = () => {

    const {increment , decrement , reset , count} = useCounter(0)



  return (
    <>
    <h3>{count}</h3>

    <button onClick={increment}>increment</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
}

export default CustomHook

// Reusable function 
// it uses React Hooks
// Encapsulate logic

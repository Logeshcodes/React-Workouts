import React, { useContext } from 'react'

import { CounterContext } from './Context'

const ContextChild = () => {


    const {increment , decrement , reset , count } = useContext(CounterContext)


  return (
    
        <>
            <h3>{count}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrement</button>
        </>
  )
}

export default ContextChild
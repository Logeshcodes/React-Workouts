import React, { createContext, useState } from 'react'

import ContextChild from './ContextChild';

export const CounterContext = createContext()

const Context = () => {


    const [count , setCount] = useState(0);

    const increment = ()=>{
        
        setCount(count+1)
    }
    const reset = ()=>{

        setCount(0)
    }
    const decrement = ()=>{

        setCount(count-1)
    }





  return (
    <>
    <CounterContext.Provider value={{increment , reset , decrement , count}}>
        <ContextChild/>
    </CounterContext.Provider>
    </>
  )
}

export default Context

// React context API is a way to share the data across all the component , access globally (like theme , authentication , settings)

// adv => Avoid props drilling - means without pass props to the each level
//     => Global sharing data 
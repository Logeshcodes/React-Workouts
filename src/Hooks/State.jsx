import React from "react";
import { useState } from "react";

const State = () =>{

    const [count , setCount] = useState(0);

    console.log('State')

    return(
        <>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}

export default State ;

// used for managed state in functional components

// UseState returns a array with two elements one was the current state and other one was to update the state
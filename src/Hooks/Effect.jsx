import React, { useEffect, useState } from "react";

const Effect = () =>{

    let [ count , setCount] = useState(0)

    useEffect(()=>{
        
        const timer = setTimeout(()=>{
            console.log('UseEffect Called...');
        },2000)

        return()=>{
            clearInterval(timer)
        }
    },[count])


    return (
        <>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <button onClick={()=> setCount(count-1)}>Increment</button>
        </>
    )
}

export default Effect

// UseEffect have callback function and optional dependency array to control the re-render

// componentDidMount - have dependency Array render have only once
// componentDidUpdate - have dependency Array changes
// componentDidUnmount - return a function for cleanUp tasks
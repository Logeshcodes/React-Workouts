import React, { useRef } from "react";

const Ref = ()=>{

    const inputRef = useRef()

    function showInput(){
        console.log(inputRef.current.value)
    }

    return(
        <>
        <input ref={inputRef}></input>
        <button onClick={()=> showInput()}>show</button>
        </>
    )
}

export default Ref ;

// useref return a mutable object (ref)
// uncontrolled component why because we have reference on the DOM to get the value Tree give control over the DOM 
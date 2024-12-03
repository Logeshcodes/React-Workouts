import React, { useRef } from 'react'
import ForwardChild from './ForwardChild'

const Forward = () => {


    let inputRef = useRef()

   function focus(){
    console.log(inputRef.current.value)
   }


  return (
    <>
    <ForwardChild ref={inputRef}/>
    <button onClick={focus}>show</button>
    </>
  )
}

export default Forward
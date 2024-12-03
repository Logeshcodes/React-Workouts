import React from 'react'
import RenderChild from './RenderChild'

const RenderProps = () => {


  return (
    <>
    <RenderChild 
    
    render={(count , increment)=>(
        <>
        <h3>{count}</h3>
        <button onClick={increment}>increment</button>
        </>
    )}
    
    />
    </>
  )
}

export default RenderProps
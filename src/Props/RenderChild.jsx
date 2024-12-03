import React, { useState } from 'react'

const RenderChild = ({render}) => {


    let [count , setCount] = useState(0)

    const increment =()=>{
        setCount(count+1);
    }

  return (
    render(count ,increment )
  )
}

export default RenderChild
import React from 'react'

import Child from './Child'

const Parent = () => {

    const pname = 'Logesh'

    function print(val){
        console.log(val)
    }

  return (
    <>
    <Child name={pname} fun={print}/>
    </>
  )
}

export default Parent


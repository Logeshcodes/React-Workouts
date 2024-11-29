import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [num , setNum] = useState(0)


    function fac(n){
        if(n< 2) return n ;
        return n*fac(n-1)
    }

    const factorial = useMemo(()=>{
        console.log('factorial function')
        return fac(num)
    })



  return (
    <>
    <h3>value : {factorial}</h3>
    <input type="number"  onChange={(e)=> setNum(Number(e.target.value))} />
    </>
  )
}

export default UseMemo

// memoizes the computed results.

// Prevents unnecessary recalculations
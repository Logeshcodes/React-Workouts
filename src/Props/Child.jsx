import React from 'react'

const Child = ({name , fun}) => {


    const cname = 'papa';

  return (
    <>
    {name}
    <button onClick={()=> fun(cname)}>show</button>
    </>
  )
}

export default Child
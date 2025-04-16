import React from 'react'

const ForwardChild = React.forwardRef((_ , ref) => {
    return <input type='text' ref={ref}></input>
  })

export default ForwardChild
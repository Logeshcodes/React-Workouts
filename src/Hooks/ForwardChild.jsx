import React from 'react'

const ForwardChild = React.forwardRef((props , ref) => {
    return <input type='text' ref={ref}></input>
  })

export default ForwardChild
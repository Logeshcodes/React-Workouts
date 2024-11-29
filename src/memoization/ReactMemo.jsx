import React from 'react'

const ReactMemo = React.memo(({value}) => {
    console.log('Rendered..')
    return (
        
      <>
      <h3>{value}</h3>
      </>
    )
  })

export default ReactMemo

// higher order component 

// similar to pure Component in class

import React from 'react'

const ConditionalRendering = ({isLogged}) => {
  return (
    <>
        { isLogged ? <h1>Welcome Home</h1>:  <h1>Please Login...</h1>}
    </>
  )
}

export default ConditionalRendering
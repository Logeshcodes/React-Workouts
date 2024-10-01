import React from 'react'

const MemoComponent = ({name}) => {

    console.log('Rendering memo component..');
    
  return (
    <>
    <div>MemoComponent</div>
    <p>{name}</p>

    </>
  )
}

export default React.memo(MemoComponent)
import React from 'react'

function Error({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('not a hero');
        
    }
  return (
    
    <>
    <div>Error</div>

    <h5>{heroName}</h5>
    </>
  )
}

export default Error 
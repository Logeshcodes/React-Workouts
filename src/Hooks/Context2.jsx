import React ,{useContext} from 'react'

import { userContext } from '../App.jsx';

const Context2 = () => {


    const user = useContext(userContext)

  return (
    <>

    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    
    
    
    </>
  )
}

export default Context2
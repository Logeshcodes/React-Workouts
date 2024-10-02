import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

import Context from "./Hooks/Context.jsx";



export  const userContext = React.createContext()

function App(){

    const user = {name : "logesh" , age : 21}

    return(
        <>

        <userContext.Provider value={user}>
        <Context/>
        </userContext.Provider>
        
        </>
    )
  
}

export default App

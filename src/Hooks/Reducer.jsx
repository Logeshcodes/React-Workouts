import React, { useReducer } from 'react'


function counterReducer( state , action ){

    switch(action.type){

        case 'increment' : 
            return {count : state.count + 1}
        case 'reset' : 
            return {count : 0}
        case 'decrement' : 
            return {count : state.count - 1}
        
    }
}

const Reducer = () => {

    const [ state , dispatcher  ] = useReducer( counterReducer , {count : 0})


  return (
    <>

    <h3>{state.count}</h3>

    <button onClick={()=>  dispatcher({type : 'increment'})}>increment</button>
    <button onClick={()=>  dispatcher({type : 'reset'})}>reset</button>
    <button onClick={()=>  dispatcher({type : 'decrement'})}>decrement</button>
    </>
  )
}

export default Reducer
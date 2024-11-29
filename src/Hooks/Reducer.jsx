import React, { useReducer } from 'react'


function counterReducer( state , action ){

    switch(action.type){

        case 'increment' : 
            return {count : state.count + action.payload}
        case 'reset' : 
            return {count : action.payload}
        case 'decrement' : 
            return {count : state.count - action.payload}
        
    }
}

const Reducer = () => {

    const [ state , dispatcher  ] = useReducer( counterReducer , {count : 0})


  return (
    <>

    <h3>{state.count}</h3>

    <button onClick={()=>  dispatcher({type : 'increment' , payload: 5 })}>increment</button>
    <button onClick={()=>  dispatcher({type : 'reset' , payload: 0})}>reset</button>
    <button onClick={()=>  dispatcher({type : 'decrement', payload: 5})}>decrement</button>
    </>
  )
}

export default Reducer
import { useReducer } from "react"


function countReducer(state , action ){

    switch(action.type){
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        case 'reset':
            return {count : 0}
        default:
            throw new console.error('error');
            
    }
}

const Reducer = ()=>{

    let[ state , dispatcher] = useReducer(countReducer , {count : 0})

    return (
        <>


        <h3>Count : {state.count}</h3>

        <button onClick={()=>dispatcher({type:'increment'})}>increment</button>
        <button onClick={()=>dispatcher({type:'reset'})}>reset</button>
        <button onClick={()=>dispatcher({type:'decrement'})}>decrement</button>
        
        </>
    )
}

export default Reducer

// useReducer and Usecontext => do to counter app
import React from "react"

export const Hello = ()=>{


    // using JSX 

    // return(
    //     <>

    //     <h1>Hello React...</h1>
        
    //     </>
    // )

    // without JSX 

    return React.createElement('h1' , {id:'heading1'}, 'Hello React2 ...')
}
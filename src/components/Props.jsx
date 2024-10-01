

export const Passing = (props)=>{        

    const {name , children} = props        // props destructuring 
   // console.log(props)

   // props.name = 'Logu'                  => because props are act as a pur function

   
    return(
        <>

        <h3>Hello {name}</h3>
        {children}


        <h5>Event Handling</h5>
        <button onClick={()=>console.log('btn clicked..')}>Click</button>
        </>
    )
}
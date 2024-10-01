import { Component } from "react";

class  Welcome extends Component{

   render(){
    return(

        <>
        <h1>Class Component </h1>

        {/* props-later video */}
        <p>Welcome {this.props.name}</p>
        </>
    )
   }

   
}

export default Welcome
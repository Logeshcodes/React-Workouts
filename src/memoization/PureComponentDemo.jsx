

// Avaliable only in Class Component


// implements shouldComponentUpdate ( shallow comparsion)

// Avoid Unnecessary re-render , improves performance


import { PureComponent } from "react";

class PureComponentDemo extends PureComponent {

    render(){

        console.log("Rendered");
        return (
            <>
            
            <h3>{this.props.value}</h3>
            </>
        )
    }
}



export default PureComponentDemo ;
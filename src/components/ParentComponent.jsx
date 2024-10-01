import { Component, PureComponent } from "react";

import PureComp from "./PureComponent";
import RegComp from "./RegComp";
import MemoComponent from "./MemoComponent";


class ParentComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : 'Logesh'
        }
    }

    // componentDidMount(){
    //     setInterval(() => {
    //        this.setState({
    //          name : 'Logesh'
    //        })
    //     }, 2000);
    // }


    render(){
        console.log('***Parent render ****');
        
        return(
            <>
            <div>Parent components </div>
            {/* <PureComp name={this.state.name}/>
            <RegComp name={this.state.name} /> */}
            <MemoComponent name={this.state.name} />
            </>
        )
    }
}

export default ParentComponent
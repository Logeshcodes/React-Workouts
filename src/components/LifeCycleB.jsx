import React, { Component } from 'react'

class LifeCycleB extends Component{

    constructor(props){

        super(props)

        this.state = {
            name : 'Logesh'
        }
        console.log('LifeCycleB construction');
        
    }
    static getDerivedStateFromProps(props , state){
        console.log('B getDerivedStateFromProps');
        
        return null ;
    }

    componentDidMount(){
        console.log("B componentDidMount")
    }

    render(){
        console.log('B render');
        
        return(
            <div>LifeCycle B</div>
        )
    }
}

export default LifeCycleB
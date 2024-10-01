import React, { Component } from 'react'

import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{

    constructor(props){

        super(props)

        this.state = {
            name : 'Logesh'
        }
        console.log('LifeCycleA construction');
        
    }
    static getDerivedStateFromProps(props , state){
        console.log('A getDerivedStateFromProps');
        
        return null ;
    }

    componentDidMount(){
        console.log("A componentDidMount")
    }

    render(){
        console.log('A render');
        
        return(
            <>
            <div>LifeCycle A</div>
            <LifeCycleB/>
            </>
        )
    }
}

export default LifeCycleA
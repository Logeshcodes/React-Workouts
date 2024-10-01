import React from 'react'

import { Component } from 'react'

class RegComp extends Component  {
 render(){
    console.log('Reg component');
    
    return (
        <div>Reg Component {this.props.name}</div>
      )
 }
}

export default RegComp
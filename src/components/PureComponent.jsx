import React from 'react'

import { PureComponent } from 'react'

class PureComp extends PureComponent  {
 render(){
    console.log('pure component');
    
    return (
        <div>PureComponent {this.props.name}</div>
      )
 }
}

export default PureComp
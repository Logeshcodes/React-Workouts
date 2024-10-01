import React from 'react'

const StyleSheet = (props) => {

    let classname = props.primary ? 'primary' : ''

  return (
    <div className={`${classname} text`}>StyleSheet</div>       // multiple classname= using template iterals
  )
}

export default StyleSheet
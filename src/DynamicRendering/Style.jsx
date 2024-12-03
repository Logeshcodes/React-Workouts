import React from 'react'

const Style = ({isActive}) => {
  

    const style = {
        backgroundColor: isActive ? 'green' : 'gray',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
    };

    return <button style={style}>{isActive ? 'Active' : 'Inactive'}</button>;

}

export default Style

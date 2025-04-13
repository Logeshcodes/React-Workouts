import React, { useEffect, useState } from 'react'

const User = () => {


    let [users , setUser] = useState([]) ;

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))

    },[])



  return (
    <>
    <ul>
        {
            users.map(user =>(
                <li key={user.id}>{user.name }</li>
            ))
        }
    </ul>
    </>
  )
}

export default User
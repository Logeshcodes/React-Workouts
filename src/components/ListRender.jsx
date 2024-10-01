import React from 'react'

import Person from './ListPerson'

export  const ListRender = () => {

    const names = ['Logesh', 'Vicky' , 'Harish']

    const nameList = names.map((x , index)=> <div key={index}>{x}{index}</div>)


    let person = [
      {
        id : 1 , name : 'Logu', age : 21 , skill : 'React'

      },{
        id : 2 , name : 'Log', age : 23 , skill : 'Vue'
      }
    ]

  return (
    <>

    <h6 >{nameList}</h6>
    <div>
      {
        person.map(x=> <Person key={x.id} person={x}/>)
      }
    </div>
    
    </>
  )
}


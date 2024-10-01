import React from 'react'

const Person = ({person}) => {
  return (
    <h6>I am {person.name} and my age is {person.age} learing {person.skill} {person.id}</h6>
  )
}

export default Person
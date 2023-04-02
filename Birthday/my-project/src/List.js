import React from 'react'
import Person from './Person';

const List = (props) => {
    
  
    console.log(props.people)
  return (
    <div className='allPeople'>
     {
        props.people.map((person,index)=>{
         return <Person key={person.id} person={person} index={index+1} handleDelete={props.handleDelete}/>   
        })
     }
    </div>
  )
}

export default List

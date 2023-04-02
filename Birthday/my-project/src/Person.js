import React from 'react'

const Person = (props) => {
    const {id,name,age,image}=props.person
    
    const idx=props.index;
    
    console.log(props.index)
    // style={{backgroundColor:(props.index%2)===1&&'blue'}}
  return (
    <div className='person' >
        <div className='image'>
      <img src={image} alt={name}></img>
      </div>
      <div className='name-age'>
      <div className='name'><span>{name}</span></div>
      <div className='age'><span>{age}</span></div>
      <button onClick={()=>props.handleDelete(id)} className='btn-user'>Delete User</button>
      </div>
      
    </div>
  )
}

export default Person

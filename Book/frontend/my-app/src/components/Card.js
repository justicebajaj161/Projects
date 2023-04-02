import React from 'react'

const Card = (props) => {
  
  const {img,title,author}=props.book;
  
  return (
    <div className='Card-background'>
      <div className='Card-img'>
      <img src={img} alt={title}></img>
    </div>
    <div className='Card-title'>
      <h2>{title}</h2>
    </div>
    <div className='Card-author'>
      <h3>{author}</h3>
    </div>
    <div className='rank'>
      <span>{`#${1+props.rank}`}</span>
    </div>
   
    </div>
   
  )
}

export default Card

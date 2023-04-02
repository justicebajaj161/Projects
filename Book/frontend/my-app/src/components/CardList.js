import React from 'react'
import Card from './Card'


const CardList = () => {
  const Books=[
  {
    author:"James Bond",
    title:"Galaxy Part 1",
    img:"https://images-eu.ssl-images-amazon.com/images/I/51myt0GXIUL._AC_SX184_.jpg",
    id:1
  },
  {
    author:"Jimmy Jackson",
    title:"Galaxy Part 2",
    img:"https://images-eu.ssl-images-amazon.com/images/I/41cqBP3CKoL._AC_SX184_.jpg",
    id:2
  },
  {
    author:"Marcy Peterson",
    title:"Galaxy Part 3",
    img:"https://images-eu.ssl-images-amazon.com/images/I/51BuIKTGyRL._AC_SX184_.jpg",
    id:3
  },
   {
    author:"Garlic Hugdes",
    title:"Galaxy Part 4",
    img:"https://images-eu.ssl-images-amazon.com/images/I/51cUnd3JwoL._AC_SX184_.jpg",
    id:4
  },
 {
    author:"Robin Gilly",
    title:"Galaxy Part 5",
    img:"https://images-eu.ssl-images-amazon.com/images/I/511dLN7ditL._AC_SX184_.jpg",
    id:5
  },
  {
    author:"Tom Billany",
    title:"Galaxy Part 6",
    img:"https://m.media-amazon.com/images/I/51j6xQUHhmL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    id:6
  },
  {
    author:"Aristor Babage",
    title:"Galaxy Part 7",
    img:"https://m.media-amazon.com/images/I/51R5XZ5cLvL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    id:6
  },
  {
    author:"Linkin Park",
    title:"Galaxy Part 8",
    img:"https://m.media-amazon.com/images/I/4173Mv2gPrL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    id:6
  },
]
  return (
    <>
    <h1>BEST BOOKS</h1>
    <div className='Card-List'>
      {Books.map((book,index)=>{
        
       return  <Card book={book} key={book.id} rank={index}/>
      })}
    {/* <Card author={firstBook.author} img={firstBook.img} title={firstBook.title}/>
    <Card author={secondBook.author} img={secondBook.img} title={secondBook.title}/>
    <Card author={thirdBook.author} img={thirdBook.img} title={thirdBook.title}/>
    <Card author={fourthBook.author} img={fourthBook.img} title={fourthBook.title}/>
    <Card author={fifthBook.author} img={fifthBook.img} title={fifthBook.title}/> */}
    </div>
    </>
  )
  
}

export default CardList

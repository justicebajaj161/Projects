
import { useState } from 'react';
import './App.css';
import List from './List';
import People from './People';

function App() {
  const [people,setPeople]=useState(People)
  const handleDelete=(id)=>{
    const newPeople = people.filter((person)=> {return (person.id!==id)})
     setPeople(newPeople)
    
 }
 const removeAll=()=>{
  setPeople([])
 }
 
  return (
    <section className='App'>
      <h1>Number of birthdays = {people.length} </h1>
      <List people={people} handleDelete={handleDelete}/>
      <button onClick={()=>removeAll()} className='btn-clear'>Clear All</button>


    </section>
  );
}

export default App;

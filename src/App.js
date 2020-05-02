import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'moss', age: 17 },
      { name: 'tree', age: 104 }
    ]
  });

  const switchNameHandler = () => {
    // DO NOT DO THIS
    // this.state.persons[0].name = "Bobo";
  
    // DO THIS INSTEAD
    setPersonsState({persons: [
      { name: 'Bobo', age: 17 },
      { name: 'tree', age: 104 }
    ]})
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].name}>Hobbies: Producing oxygen</Person>
    </div>
  );
}

export default app;
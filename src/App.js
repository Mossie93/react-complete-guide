import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <Person name="moss" age="17"/>
        <Person name="tree" age="104">Hobbies: Producing oxygen</Person>
      </div>
    );
  }
}

export default App;

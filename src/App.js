import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'moss', age: 17 },
      { name: 'tree', age: 104 }
    ]
  }

  switchNameHandler = () => {
    // DO NOT DO THIS
    // this.state.persons[0].name = "Bobo";

    // DO THIS INSTEAD
    this.setState({persons: [
      { name: 'Bobo', age: 17 },
      { name: 'tree', age: 104 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>Hobbies: Producing oxygen</Person>
      </div>
    );
  }
}

export default App;

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

  switchNameHandler = (newName) => {
    // DO NOT DO THIS
    // this.state.persons[0].name = "Bobo";

    // DO THIS INSTEAD
    this.setState({persons: [
      { name: newName, age: 17 },
      { name: 'tree', age: 104 }
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: event.target.value, age: 17 },
      { name: 'tree', age: 104 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={() => this.switchNameHandler('Bobo')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Appa')}
          changed={this.nameChangeHandler}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].name}>
            Hobbies: Producing oxygen
        </Person>
      </div>
    );
  }
}

export default App;

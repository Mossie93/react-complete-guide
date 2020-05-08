import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'moss', age: 17 },
      { id: 2, name: 'tree', age: 104 },
      { id: 3, name: 'rock', age: 1600 }
    ],
    username: 'random name blabla',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  usernameChangeHandler  = (event)=> {
    this.setState({username: event.target.value})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      passing: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id} 
                name={person.name} 
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
        
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserInput changed={this.usernameChangeHandler} username={this.state.username}></UserInput>
      </div>
    );
  }
}

export default App;

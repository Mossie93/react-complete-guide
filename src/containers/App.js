import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'moss', age: 17 },
      { id: 2, name: 'tree', age: 104 },
      { id: 3, name: 'rock', age: 1600 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // slice will copy the array. It is safer to operate on copied one.
    // another approach: const persons = [...this.state.persons]
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons}  
          />
        </div>
      );

      btnClass.push(classes.Red)
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2 ) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1 ) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

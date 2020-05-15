import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'moss', age: 17 },
      { id: 2, name: 'tree', age: 104 },
      { id: 3, name: 'rock', age: 1600 }
    ],
    showPersons: false
  }

  // This is where you should update your state and return it
  // Do: sync state to props
  // Don't: cause side effects
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] get derived state from props', props);
    return state;
  }

  // Warning! componentWillMount is deprecated
  componentWillMount() {
    console.log('[App.js] component will mount');
  }

  componentDidMount() {
    console.log('[App.js] component did mount');
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
    console.log('[App.js] rendering...');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}  
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;

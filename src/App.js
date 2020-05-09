import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'moss', age: 17 },
      { id: 2, name: 'tree', age: 104 },
      { id: 3, name: 'rock', age: 1600 }
    ],
    username: 'random name blabla',
    showPersons: false,
    textToValidate: ''
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  usernameChangeHandler  = (event)=> {
    const username = event.target.value;
    this.setState({username: username});
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

  changeTextToValidate = (event) => {
    const newText = event.target.value;
    this.setState({textToValidate: newText});
  }

  removeLetter = (letterIndex, e) => {
    const newText = this.state.textToValidate.split('');
    newText.splice(letterIndex, 1);
    this.setState({textToValidate: newText.join('')});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      passing: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        cursor: 'pointer'
      }
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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        cursor: 'pointer'
      }
    }

    let lettersArray = this.state.textToValidate.split('');
    let letters = (
      <div>
        {lettersArray.map((letter, index) => {
          return (
            <CharComponent 
              key={letter + "-" + index}
              letter={letter} 
              click={() => this.removeLetter(index)}
            />
          )
        })}
      </div>
    )

    let classes = [];
    if (this.state.persons.length <= 2 ) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
        
        <div className="FirstHomework">
          <UserOutput username={this.state.username}></UserOutput>
          <UserOutput username={this.state.username}></UserOutput>
          <UserInput changed={this.usernameChangeHandler} username={this.state.username}></UserInput>
        </div>

        <div className="SecondHomework">
          <input onChange={this.changeTextToValidate} value={this.state.textToValidate}></input>
          <ValidationComponent textToValidate={this.state.textToValidate}/>
          {letters}
        </div>
      </div>
    );
  }
}

export default App;

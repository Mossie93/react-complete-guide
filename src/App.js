import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'moss', age: 17 },
      { name: 'tree', age: 104 }
    ],
    username: 'random name blabla',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons: !doesShow})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: event.target.value, age: 17 },
      { name: 'tree', age: 104 }
    ]})
  }

  usernameChangeHandler  = (event)=> {
    this.setState({username: event.target.value})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      passing: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch name
        </button>
        {this.state.showPersons === true ?
          <div >
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              changed={this.nameChangeHandler}
            />
          </div> : null
        }
        
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserInput changed={this.usernameChangeHandler} username={this.state.username}></UserInput>
      </div>
    );
  }
}

export default App;

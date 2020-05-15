import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] get derived state from props'); 
    return state;
  }
  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {  
      return (
        <Person
          key={person.id} 
          name={person.name} 
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  };
};

export default Persons;
import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] get derived state from props'); 
    return state;
  }

  // Do: decide whether to continue and update  component
  // Don't: cause side effects
  // return true if component should upate, and false otherwise
  shouldComponentUpate(nextProps, nextState) {
    console.log('[Persons.js] shopuld component update');
    return true;
  }

  // Do: last minute DOM opeartions, ex.g get current scroll position
  // Don't: Cause side effects
  getSnapshotBeforeUpdate() {
    console.log('[Persons.js] get snapshot before update');
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
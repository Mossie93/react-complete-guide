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
  // If you want to check for every single prop in props, then remove this method, and use 'extends PureComponent' in class definition
  shouldComponentUpate(nextProps, nextState) {
    console.log('[Persons.js] shopuld component update');
    // remember that arrrays andd objects are reference-types "variables"
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  // Do: last minute DOM opeartions, ex.g get current scroll position
  // Don't: Cause side effects
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] get snapshot before update');
    return { message: 'Snap!' };
  }

  // Do: cause side effects, ex.g. http requests
  // Don't: update state
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] component did update', snapshot);
  }

  // Use if you need to clean up stuff when unmounting component
  componentWillUnmount() {
    console.log('[Persons.js] component will unmount');
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
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  };
};

export default Persons;
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass'
import classes from './Person.css';

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <Fragment>
        <p onClick={this.props.click}>I'm a {this.props.name}, I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
          type="text"
          ref={(inputEl) => {this.inputElement = inputEl}}
          onChange={this.props.changed} 
          value={this.props.name}
        >  
        </input>
      </Fragment>
    );
  };
};

Person.propTypes = {
  age: PropTypes.number,
  changed: PropTypes.func,
  click: PropTypes.func,
  name: PropTypes.string
};

export default withClass(Person, classes.Person);
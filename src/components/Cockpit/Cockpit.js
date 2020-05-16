import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>  {
  let btnClass = [''];
  let assignedClasses = [];

  // this will run for every render cycle of this component
  // it's like componentDidMount and componentDiDUpdate combined in one effect 
  useEffect(() => {
    console.log('[Cockpit.js] use effect');
    // you can do http requests here
  });

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2 ) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1 ) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React app!</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass.join(' ')}
        onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
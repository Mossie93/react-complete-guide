import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>  {
  const toggleButtonRef = useRef(null);
  let btnClass = [''];
  let assignedClasses = [];

  // this will run for every render cycle of this component
  // it's like componentDidMount and componentDiDUpdate combined in one effect 
  // by  adding props.persons as second arg you tell that it should run only when persons changed
  // if you want to run it only upon first render, pass empty array as second arg
  useEffect(() => {
    console.log('[Cockpit.js] use effect');
    // you can do http requests here
    setTimeout(() => {
      alert('Data saved to cloud!');
    }, 1000);

    toggleButtonRef.current.click();

    // this will run after (first) render cycle but before useEffect hook
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.personsLength <= 2 ) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1 ) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React app!</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass.join(' ')}
        onClick={props.clicked}
        ref={toggleButtonRef}
      >
        Toggle persons
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

// React.memo stores snapshot of thiscomponent
// if its input changes, erenner happens. otherwise not.
export default React.memo(cockpit);
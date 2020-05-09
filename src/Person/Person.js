import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 60%;
  margin: 16px auto;

  @media (min-width: 500px) {
    width: 450px;
  }
`;


const person = (props) => {
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name}, I'm {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>
  )
}

export default person;
import React from 'react';
import classes from '../Person/Person.css'
const myParagraphStyle = {display:'inline-block', padding:'6px', backgroundColor:'yellow'};

const person = (props) => {
  
  return (
    <div className={classes.Person}>
      <p onClick={props.click} style={myParagraphStyle}> I am {props.name} and I am {props.age} old ! </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;


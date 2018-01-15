import React from 'react';
import './Person.css'
const myParagraphStyle = {display:'inline-block', padding:'6px', backgroundColor:'yellow'};

const person = (props) => {
  
  return (
    <div className="Person">
      <p onClick={props.click} style={style}> I am {props.name} and I am {props.age} old ! </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);


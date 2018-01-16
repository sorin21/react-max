import React, { Component } from 'react';
import PropTypes from "prop-types";
import classes from '../Person/Person.css'
// import WithClass from "../../../Hoc/WithClass";
import withClass from "../../../Hoc/withClass2";
import Aux from "../../../Hoc/Auxiliary";

const myParagraphStyle = {display:'inline-block', padding:'6px', backgroundColor:'yellow'};

class Person extends Component  {
  constructor(props) {
    super(props)
    console.log('Person.js Inside Constructor', props)
  }

  componentWillMount() {
    console.log('Person.js Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('Person.js Inside componentDidMount()')
    if(this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('Person.js Inside render()')
     return (
       <Aux>
         <p onClick={this.props.click} style={myParagraphStyle}> I am {this.props.name} and I am {this.props.age} old ! </p>
         <p>{this.props.children}</p>
         <input 
          // set up a reference to this element  
          // ref are only available in statefull components
          // add a property, random name, inputElement
          ref={(inp) => {this.inputElement = inp}}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
       </Aux>
     )

    // return [
    //   <p key="1" onClick={this.props.click} style={myParagraphStyle}> I am {this.props.name} and I am {this.props.age} old ! </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);


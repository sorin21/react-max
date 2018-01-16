import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('Persons.js Inside Constructor', props)
  }

  componentWillMount() {
    console.log('Persons.js Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('Persons.js Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update] Persons.js Inside componentWillReceiveProps()', nextProps)
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update] Persons.js Inside shouldComponentUpdate()', nextProps, nextState)
  //   // should return true or false
  //   // return true;
  //   // this is true because we copyied in const person
  //   // a new object
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update] Persons.js Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[Update] Persons.js Inside componentDidUpdate()')
  }
  render() {
    console.log('Persons.js Inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;
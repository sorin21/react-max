import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'das4', name: 'Max', age: 25},
      {id: 'dsf1', name: 'Sorin', age: 38},
      {id: 'ghfhg5', name: 'Cristina', age: 19}
    ],
    showPersons: false
  }


  // target is the input where we type  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((personInput) => {
      return personInput.id === id;
    });

    // create a new object, because just copying 
    // the new obj will point to the same pointer in memory
    const person = {
      ...this.state.persons[personIndex]
    }

    // update the name
    person.name = event.target.value;

    // copy again state persons in a new array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update the state persons
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // copy the full persons array using slice
    // in a new one
    // const personsArray = this.state.persons.slice();
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    // update the state with the new array
    this.setState({persons:personsArray})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let personsList = null;

    if(this.state.showPersons) {
      personsList = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div> 
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {personsList}
        </div>
    );
  }
}

export default App;

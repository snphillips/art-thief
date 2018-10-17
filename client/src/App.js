import React, { Component } from 'react';
import Header from './Header'
import Button from './Button'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };






  }
// ***********************************
// End of constructor
// ***********************************


//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        <Button />
      </div>
    );
  }
}


import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Button from './Button';
import ArtResult from './ArtResult'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomCooperTitle: "",
      randomCooperDate: "",
      randomCooperImageURL: "",
      randomCooperURL: "",
    };

  // This binding is necessary to make `this` work in the callback
  this.cooperHewittRandomFromAPI = this.cooperHewittRandomFromAPI.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);





  console.log("sanity check")
  }

// ***********************************
// End of constructor
// ***********************************
  cooperHewittRandomFromAPI() {
    axios.get('http://localhost:8000/cooperhewittapi')
      .then( (response) => {

        this.setState({randomCooperTitle: response.data.object.title})
        this.setState({randomCooperDate: response.data.object.date})
        this.setState({randomCooperURL: response.data.object.url})
        this.setState({randomCooperImageURL: response.data.object.images[0].z.url})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("button clicked")
    this.cooperHewittRandomFromAPI()
  }

//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        <Button handleSubmit={this.handleSubmit}/>
        <ArtResult parent_state={this.state}/>
      </div>
    );
  }
}


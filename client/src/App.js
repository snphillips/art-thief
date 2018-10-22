import React, { Component } from 'react';
import axios from 'axios';

// ===============================
// Importing Pages
// ===============================
import Header from './Header';
import PlaceholderSquare from './PlaceholderSquare';
import Button01 from './Button01';
import Button02 from './Button02';
import Button03 from './Button03';
import ArtResult from './ArtResult';
import ImageModal from './ImageModal'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverSource: 'https://art-thief.herokuapp.com/cooperhewittapi',
      // serverSource: 'http://localhost:8000/cooperhewittapi',
      randomCooperTitle: '',
      randomCooperDate: '',
      randomCooperImageURL: '',
      randomCooperURL: '',
      showModal: {"display": "none"},
      displayArtResult: {"display": "none"},
      displayLargeArtModal: {"display": "none"},
      displayPlaceholderSquare: {"display": "true"},
    };

  // This binding is necessary to make `this` work in the callback
  this.cooperHewittRandomFromAPI = this.cooperHewittRandomFromAPI.bind(this);
  this.handleSubmitButton01 = this.handleSubmitButton01.bind(this);
  // this.handleSubmitButton02 = this.handleSubmitButton02.bind(this);
  // this.handleSubmitButton03 = this.handleSubmitButton03.bind(this);
  this.viewBigImage = this.viewBigImage.bind(this);

  }
// ***********************************
// End of constructor
// ***********************************


  cooperHewittRandomFromAPI() {
    // The source of data from the server is set in this.state above
    axios.get(this.state.serverSource)
      .then( (response) => {
        this.setState({randomCooperTitle: response.data.object.title})
        this.setState({randomCooperDate: response.data.object.date})
        this.setState({randomCooperImageURL: response.data.object.images[0].z.url})
        this.setState({randomCooperURL: response.data.object.url})
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleSubmitButton01(event) {
    event.preventDefault();
    console.log("button clicked")
    this.cooperHewittRandomFromAPI()
    this.setState({displayArtResult: {"display": "block"}})
  };

  viewBigImage(event) {
    console.log("image clicked")
    this.setState({showModal: {'display': "block"}})
    // this.setState({randomCooperImageURL: this.response.data.object.images[0].z.url})
  }

//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        Click to reveal a random item from the Cooper Hewitt Museum:
        <Button01 handleSubmitButton01={this.handleSubmitButton01}/>
        <Button02 handleSubmitButton02={this.handleSubmitButton02}/>
        <Button03 handleSubmitButton03={this.handleSubmitButton03}/>
        <PlaceholderSquare parent_state={this.state}/>
        <ImageModal parent_state={this.state}/>
        <ArtResult parent_state={this.state} viewBigImage={this.viewBigImage}/>
      </div>
    );
  }
}
        // <ReactSpinner loading={this.props.loading} />


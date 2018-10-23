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
      // serverSource: 'https://art-thief.herokuapp.com/cooperhewittapi',
      serverSource: 'http://localhost:8000/cooperhewittapi',

      imageURL: '',
      learnMoreURL: '',

      randomImageURL: '',
      randomURL: '',

      jazzAgeImageURL: '',
      jazzAgeLearnMoreURL: '',

      showModal: {"display": "none"},
      displayArtResult: {"display": "none"},
      displayLargeArt: {"display": "none"},
      displayPlaceholderSquare: {"display": "block"},
    };

    // This binding is necessary to make `this` work in the callback
    this.cooperHewittRandomFromAPI = this.cooperHewittRandomFromAPI.bind(this);
    this.handleSubmitButton01 = this.handleSubmitButton01.bind(this);
    this.handleSubmitButton02 = this.handleSubmitButton02.bind(this);
    this.handleSubmitButton03 = this.handleSubmitButton03.bind(this);
    this.viewBigImage = this.viewBigImage.bind(this);
    this.closeBigImage = this.closeBigImage.bind(this);

  }
// ***********************************
// End of constructor
// ***********************************

  cooperHewittRandomFromAPI() {
    // The source of data from the server is set in this.state above
    axios.get('http://localhost:8000/cooperhewittapi')
      .then( (response) => {
        this.setState({imageURL: response.data.object.images[0].z.url})
        this.setState({learnMoreURL: response.data.object.url})
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  cooperHewittJazzAgeFromAPI() {

      let randomNumber = Math.floor((Math.random() * 100) + 1);
      console.log("randomNumber:", randomNumber)

    axios.get('http://localhost:8000/cooperhewittapijazzage')
      .then( (response) => {
        this.setState({imageURL: response.data.objects[randomNumber].images[0].z.url})
        console.log("response length:", response.data.objects.length)
        // this.setState({randomURL: response.data.object.url})
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  handleSubmitButton01(event) {
    event.preventDefault();
    console.log("button 01 clicked")
    this.cooperHewittRandomFromAPI()
    this.setState({displayArtResult: {"display": "block"}})
    this.setState({displayPlaceholderSquare: {"display": "none"}})
  };

  handleSubmitButton02(event) {
    event.preventDefault();
    console.log("button 02 clicked")
    this.cooperHewittJazzAgeFromAPI()
    this.setState({displayArtResult: {"display": "block"}})
    this.setState({displayPlaceholderSquare: {"display": "none"}})
  };

  handleSubmitButton03(event) {
    event.preventDefault();
    console.log("button 03 clicked")
    this.cooperHewittRandomFromAPI()
    this.setState({displayArtResult: {"display": "block"}})
    this.setState({displayPlaceholderSquare: {"display": "none"}})
  };

  viewBigImage(event) {
    console.log("image clicked")
    this.setState({showModal: {'display': "block"}})
    this.setState({BigImageURL: this.imageURL})
  }

  closeBigImage(event) {
    console.log("close big image")
    this.setState({showModal: {'display': "none"}})
  }


//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        Click to reveal a random item from the Cooper Hewitt Museum:
        <br />
        <Button01 handleSubmitButton01={this.handleSubmitButton01} />
        <Button02 handleSubmitButton02={this.handleSubmitButton02} />
        <Button03 handleSubmitButton03={this.handleSubmitButton03} />
        <PlaceholderSquare parent_state={this.state} />
        <ImageModal parent_state={this.state} closeBigImage={this.closeBigImage} />
        <ArtResult parent_state={this.state} viewBigImage={this.viewBigImage} />
      </div>
    );
  }
}
        // <ReactSpinner loading={this.props.loading} />


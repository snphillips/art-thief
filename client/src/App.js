import React, { Component } from 'react';
import axios from 'axios';

// ===============================
// Importing Pages
// ===============================
import Header from './Header';
import PlaceholderSquare from './PlaceholderSquare';
import DropdownMenu from './DropdownMenu';
import ArtResult from './ArtResult';
import ImageModal from './ImageModal';
import InformationPanel from './InformationPanel';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // the loading spinner
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:8000/searchbytag',
      imageURL:"",
      itemTitle: "",
      itemMedium: "",
      itemInfo: "",
      learnMoreURL:"",
      value:"industrial design", //starting with a value in case the user doesn't choose before submitting
      displayModal: {"display": "none"},
      displayArtResultImage: {"display": "none"},
      displayArtResultInfo: {"display": "none"},
      // displayLearnMoreURL: {"display": "none"},
      displayLargeArt: {"display": "none"},
      displayPlaceholderSquare: {"display": "block"},
    };

    // This binding is necessary to make `this` work in the callback
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.viewBigImage = this.viewBigImage.bind(this);
    this.closeBigImage = this.closeBigImage.bind(this);

  }
// ***********************************
// End of constructor
// ***********************************

 //  ==================================
 //  dropdown menu. First they choose
 //  a value/search tag in the Change event,
 //  then submit that value.
 //  ==================================
  handleDropdownChange(event) {
    this.setState({value: event.target.value});
  }

  handleDropdownSubmit(event) {
    this.setState({displayArtResultInfo: {"display": "none"}})
    this.cooperHewittSearchByTagFromAPI()
    event.preventDefault();

  }

  cooperHewittSearchByTagFromAPI() {
    this.setState({loading: true})
    // generate a random number to select from returned array of objects
    let randomNumber = Math.floor((Math.random() * 56) + 1);
    console.log("randomNumber:", randomNumber)

    // ${this.state.value} is whatever keyword the user chose from the dropdown menu
    // The response does the following:
    // 1) stops the loading spinner
    // 2) removes the placeholder image
    // 3) returns a random item (image, link url & description)
    axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${this.state.value}`)
      .then( (response) => {
        this.setState({loading: false});
        this.setState({displayPlaceholderSquare: {"display": "none"}})
        this.setState({displayArtResultImage: {"display": "block"}})
        // this.setState({displayLearnMoreURL: {"display": "block"}})
        this.setState({imageURL: response.data.objects[randomNumber].images[0].z.url})
        this.setState({itemTitle: response.data.objects[randomNumber].title})
        this.setState({itemMedium: response.data.objects[randomNumber].medium})
        this.setState({itemInfo: response.data.objects[randomNumber].label_text})
        this.setState({learnMoreURL: response.data.objects[randomNumber].url})
        this.setState({displayArtResultInfo: {"display": "block"}})
      })
      .catch(function (error) {
        this.setState({showPlaceholderImage: true});
        console.log(error);
      });
  };

 //  ==================================
 //  modal: the expanded image
 //  ==================================
  viewBigImage(event) {
    this.setState({displayModal: {'display': "block"}})
    this.setState({BigImageURL: this.imageURL})
  }

  closeBigImage(event) {
    this.setState({displayModal: {'display': "none"}})
  }


//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <p></p>
          <DropdownMenu handleDropdownChange={this.handleDropdownChange}
                        handleDropdownSubmit={this.handleDropdownSubmit}
                        loading={this.state.loading}
                        parent_state={this.state}/>
          <PlaceholderSquare parent_state={this.state} />
          <ArtResult parent_state={this.state} viewBigImage={this.viewBigImage} />
          <ImageModal parent_state={this.state} closeBigImage={this.closeBigImage} />
          <InformationPanel parent_state={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

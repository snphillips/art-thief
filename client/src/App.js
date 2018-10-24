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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // the loading spinner
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:8000/searchbytag',
      imageURL:'',
      learnMoreURL:'',
      value:'modernism', //starting with something in case user doesn't choose
      showModal: {"display": "none"},
      displayArtResult: {"display": "none"},
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
    // let tag = this.state.value
    console.log('the current lookup tag is: ' + this.state.value);
    this.cooperHewittSearchByTagFromAPI()
    this.setState({displayArtResult: {"display": "block"}})
    this.setState({displayPlaceholderSquare: {"display": "none"}})
    event.preventDefault();

  }

  cooperHewittSearchByTagFromAPI() {
    this.setState({loading: true})
    // generate a random number to select from returned array of objects
    let randomNumber = Math.floor((Math.random() * 56) + 1);
    console.log("randomNumber:", randomNumber)

    axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${this.state.value}`)
      .then( (response) => {
        this.setState({loading: false});
        this.setState({imageURL: response.data.objects[randomNumber].images[0].z.url})
        this.setState({learnMoreURL: response.data.objects[randomNumber].url})
      })
      .catch(function (error) {
        console.log(error);
      });
  };


 //  ==================================
 //  The modal: the expanded image user clicks
 //  ==================================
  viewBigImage(event) {
    // console.log("image clicked")
    this.setState({showModal: {'display': "block"}})
    this.setState({BigImageURL: this.imageURL})
  }

  closeBigImage(event) {
    // console.log("close big image")
    this.setState({showModal: {'display': "none"}})
  }


//  ==================================
//  And finally, the render
//  ==================================
  render() {
    return (
      <div className="App">
        <Header />
        Reveal a random item from the Cooper Hewitt Museum:
        <br />
        <DropdownMenu handleDropdownChange={this.handleDropdownChange}
                      handleDropdownSubmit={this.handleDropdownSubmit}
                      loading={this.state.loading}
                      parent_state={this.state}/>
        <PlaceholderSquare parent_state={this.state} />
        <ImageModal parent_state={this.state} closeBigImage={this.closeBigImage} />
        <ArtResult parent_state={this.state} viewBigImage={this.viewBigImage} />
      </div>
    );
  }
}

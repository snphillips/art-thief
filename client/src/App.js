import React, { Component } from 'react';
import axios from 'axios';
import _Lodash from 'lodash';

// ===============================
// Importing Pages
// ===============================
import Header from './Header';
import PlaceholderImage from './PlaceholderImage';
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
      // loading: true, // the loading spinner
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:8000/searchbytag',
      imageURL:"",
      itemTitle: "",
      itemMedium: "",
      itemInfo: "",
      learnMoreURL:"",
      value:"exoticism", //starting with a value in case the user doesn't choose before hitting submit
      displayArtResultImage: {"display": "none"},
      displayArtResultInfo: {"display": "none"}, // this refers to all image details like title, materials, url etc.
      displayModal: {"display": "none"},
      displayIntroMessage: {"display": "inline"},
      displayLargeArt: {"display": "none"},
      displayPlaceholderSquare: {"display": "block"},
    };

    // This binding is necessary to make `this` work in the callback
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.viewBigImage = this.viewBigImage.bind(this);
    this.closeBigImage = this.closeBigImage.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);

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
    this.setState({displayIntroMessage: {"display": "none"}})
    this.cooperHewittSearchByTagFromAPI()
    event.preventDefault();

  }

  cooperHewittSearchByTagFromAPI() {
    this.setState({loading: true})

    // ${this.state.value} is whatever keyword the user chooses from the dropdown menu
    // The "response" does the following:
    // 1) stops the loading spinner
    // 2) removes the placeholder image
    // 3) returns a random item (image, title, description & link url)
    axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${this.state.value}`)
    // axios.get(`http://localhost:8888/searchbytag/`+`${this.state.value}`)
      .then( (response) => {

        // Using the _Lodash library to first shuffle the response array,
        // in order to pluck the first item from the response array.
        response.data.objects = _Lodash.shuffle(response.data.objects)
        console.log(response.data.objects)

        this.setState({loading: false});
        this.setState({displayPlaceholderImage: {"display": "none"}})
        this.setState({displayArtResultImage: {"display": "block"}})
        this.setState({imageURL: response.data.objects[0].images[0].z.url})
        this.setState({itemTitle: response.data.objects[0].title})
        this.setState({itemMedium: response.data.objects[0].medium})
        this.setState({itemInfo: response.data.objects[0].label_text})
        this.setState({learnMoreURL: response.data.objects[0].url})
        this.setState({displayArtResultInfo: {"display": "block"}})
      })
      .catch(function (error) {
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

          <div className="image-container-stack-vertical flex-item">

            <DropdownMenu handleDropdownChange={this.handleDropdownChange}
                          handleDropdownSubmit={this.handleDropdownSubmit}
                          parent_state={this.state}
                          loading={this.state.loading} />

            <PlaceholderImage parent_state={this.state} />

            <ArtResult parent_state={this.state}
                       viewBigImage={this.viewBigImage} />

            <ImageModal parent_state={this.state}
                        closeBigImage={this.closeBigImage} />

          </div>

          <div className="info-container-stack-horizontal flex-item">

            <InformationPanel parent_state={this.state} />

          </div>

         </div>

       <Footer />

      </div>
    );
  }
}

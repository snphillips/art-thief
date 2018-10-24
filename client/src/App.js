import React, { Component } from 'react';
import axios from 'axios';

// ===============================
// Importing Pages
// ===============================
import Header from './Header';
import PlaceholderSquare from './PlaceholderSquare';
import DropdownMenu from './DropdownMenu';
// import Button01 from './Button01';
// import Button02 from './Button02';
// import Button03 from './Button03';
import ArtResult from './ArtResult';
import ImageModal from './ImageModal'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:8000/searchbytag',
      imageURL:'',
      learnMoreURL:'',
      randomImageURL:'',
      randomURL:'',
      value:'',
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
    // generate a random number to select from returned array of objects
    let randomNumber = Math.floor((Math.random() * 56) + 1);
    console.log("randomNumber:", randomNumber)

    axios.get(`https://art-thief.herokuapp.com/` +`${this.state.value}`)
      .then( (response) => {
        this.setState({imageURL: response.data.objects[randomNumber].images[0].z.url})
        console.log("response length:", response.data.objects.length)
        this.setState({randomURL: response.data.object.url})
      })
      .catch(function (error) {
        console.log(error);
      });
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
        Click a keyword to reveal a random item from the Cooper Hewitt Museum:
        <br />
        <DropdownMenu handleDropdownChange={this.handleDropdownChange}
                      handleDropdownSubmit={this.handleDropdownSubmit}
                      parent_state={this.state}/>

        <PlaceholderSquare parent_state={this.state} />
        <ImageModal parent_state={this.state} closeBigImage={this.closeBigImage} />
        <ArtResult parent_state={this.state} viewBigImage={this.viewBigImage} />
      </div>
    );
  }
}
        // <Button01 handleSubmitButton01={this.handleSubmitButton01} />
        // <Button02 handleSubmitButton02={this.handleSubmitButton02} />
        // <ReactSpinner loading={this.props.loading} />
        // <Button03 handleSubmitButton03={this.handleSubmitButton03} />


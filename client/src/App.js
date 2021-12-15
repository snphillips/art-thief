import React, { useState } from 'react';
import axios from 'axios';
import _Lodash from 'lodash';
import Header from './components/Header';
import PlaceholderImage from './components/PlaceholderImage';
import DropdownMenu from './components/DropdownMenu';
import ArtResult from './components/ArtResult';
import ImageModal from './components/ImageModal';
import InformationPanel from './components/InformationPanel';
import Footer from './components/Footer';

export default function App(props) {

    // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
    // serverSource: 'http://localhost:8000/searchbytag',
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [bigImageURL, setBigImageURL] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemMedium, setItemMedium] = useState("");
    const [itemInfo, setItemInfo] = useState("");
    const [learnMoreURL, setLearnMoreURL] = useState("");
    const [value, setValue] = useState("exoticism");
    const [displayArtResultImage, setDisplayArtResultImage] = useState('none');
    const [displayArtResultInfo, setDisplayArtResultInfo] = useState('none');
    const [displayModal, setDisplayModal] = useState('none');
    const [displayIntroMessage, setDisplayIntroMessage] = useState('inline');
    const [displayLargeArt, setDisplayLargeArt] = useState('none');
    const [displayPlaceholderImage, setDisplayPlaceholderImage] = useState('block');

  /* ==================================
  Dropdown menu. First the user choose
  a value/search tag in the Change event,
  then submit that value.
  ================================== */
  function handleDropdownChange(event) {
    setValue(event.target.value)
  }

  function handleDropdownSubmit(event) {
    console.log("handleDropdownSubmit clicked value is:", value)
    setDisplayArtResultInfo({display: "none"});
    setDisplayArtResultInfo({display: "none"});
    setDisplayIntroMessage({display: "none"});
    cooperHewittSearchByTagFromAPI()
    event.preventDefault();
  }

  function cooperHewittSearchByTagFromAPI() {
    setLoading(true)

    // ${state.value} is whatever keyword the user chooses from the dropdown menu
    // The "response" does the following:
    // 1) stops the loading spinner
    // 2) removes the placeholder image
    // 3) returns a random item (image, title, description & link url)
    axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${value}`)
    // axios.get(`http://localhost:8888/searchbytag/`+`${state.value}`)
      .then( (response) => {

        // Using the _Lodash library to first shuffle the response array,
        // in order to pluck the first item from the response array.
        response.data.objects = _Lodash.shuffle(response.data.objects)

        console.log(`The search value is:`, value, `and there are`, (response.data.objects).length, `objects.`)

        setLoading(false);
        setDisplayPlaceholderImage("none");
        setDisplayArtResultImage("block");
        setImageURL(response.data.objects[0].images[0].z.url);
        setItemTitle(response.data.objects[0].title);
        setItemMedium(response.data.objects[0].medium);
        setItemInfo(response.data.objects[0].label_text);
        setLearnMoreURL(response.data.objects[0].url);
        setDisplayArtResultInfo("block");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* ==================================
  modal: the expanded image
  ================================== */
  function viewBigImage(event) {
    setDisplayModal("block");
    setBigImageURL(imageURL);
  }

  function closeBigImage(event) {
    setDisplayModal("none");
  }

/* ==================================
 And finally, the return
 ================================== */

    return (
      <div className="App">
       <Header />
        <div className="container">
          <div className="image-container-stack-vertical flex-item">
            <DropdownMenu 
              handleDropdownChange={handleDropdownChange}
              handleDropdownSubmit={handleDropdownSubmit}
              loading={loading}
              value={value}
              />

            <PlaceholderImage 
              displayPlaceholderImage={displayPlaceholderImage} 
              />
            <ArtResult 
              displayArtResultImage={displayArtResultImage}
              imageURL={imageURL}
              viewBigImage={viewBigImage} 
              />

            <ImageModal 
              displayModal={displayModal}
              imageUrl={imageURL}
              closeBigImage={closeBigImage}
              />
          </div>
          <div className="info-container-stack-horizontal flex-item">
            <InformationPanel 
              displayIntroMessage={displayIntroMessage}
              displayArtResultInfo={setDisplayArtResultInfo}
              itemTitle={itemTitle} 
              itemInfo={itemInfo}
              itemMedium={itemMedium}
              learnMoreURL={learnMoreURL}
              />
          </div>
         </div>
       <Footer />
      </div>
    );
}

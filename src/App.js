import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import './App.css';
// api key: 174fc346c4e0464ba9c80ea8cb9265aa


const app = new Clarifai.App({
  apiKey: '174fc346c4e0464ba9c80ea8cb9265aa',
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      "https://samples.clarifai.com/metro-north.jpg").then(
  function(response) {
    console.log(response);
  },
  function(err) {
    // there was an error
  }
);
  }

  render () {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        {/*
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;

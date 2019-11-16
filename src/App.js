
import React, { Component } from 'react';
import Header from './components/Header'
import Jumbo from './components/Jumbo'
import GameImg from './components/GameImg'
import images from './images.json'
import './App.css';


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images,
    clickedImages: []
  
  }
  clickedSuccesful = (event) => {
    //old clicked get the value of clickedImages
    let newClickedImages = this.state.clickedImages

    
    //new clicked images , added the clicked value
    newClickedImages.push(event.target.dataset.id)
    //replace clicked images with the new clicked images array
    this.setState({clickedImages: newClickedImages})
    console.log(this.state.clickedImages)
  }

  pointGiven = () => {
    this.setState({score: this.state.score + 1})
  }

  

  render(){
  return (
    
    <div>
      <Header
      score = {this.state.score}
      highScore = {this.state.highScore}
      />
      <Jumbo />

      {this.state.images.map(
        (image) => 

  
      <GameImg 
      image = {image}
      myFunc = {this.clickedSuccesful}
      pointGiven = {this.pointGiven}
      />
  )}
      
    
    </div>
    
  
  );
      }
}

export default App;

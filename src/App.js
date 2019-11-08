
import React, { Component } from 'react';
import Header from './components/Header'
import Jumbo from './components/Jumbo'
import Container from './components/Container'
import GameImg from './components/GameImg'
import images from './images.json'
import './App.css';
import { directive } from '@babel/types';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images,
    clickedImages: []
  
  }
  clicked = (event) => {
    console.log(event.target.dataset.id)
  }
  render(){
  return (
    
    <div>
      <Header
      score = {this.state.score}
      highScore = {this.state.highScore}
      />
      <Jumbo />
      <GameImg 
      image = {this.state.images}
      myFunc = {this.clicked}
      
      />
      
    
    </div>
    
  
  );
      }
}

export default App;

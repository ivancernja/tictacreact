import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    }
  }
  render() {
    return (
        <div className="container">
          <div className="menu">
            <h1>Tic Tac React</h1>
            <Announcement />
            <ResetButton />
          </div>
          {this.state.gameBoard.map(function(value, i){
            <Tile />


          })}
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSessionCard from './GameSessionCard';
import Searchbar from './Searchbar';
import Navigation from './Navigation';
import Jumbo from './Jumbo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation isLoggedIn={false} />
        <Jumbo />
      </div>
    );
  }
}

export default App;

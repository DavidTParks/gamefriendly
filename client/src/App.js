import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './Components/SearchForm';
import Searchbar from './Components/Searchbar';

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gamefriendly.io</h1>
            <h1 className="browse-button" href="">Browse</h1>
            <h1 className="create-session">Create Session</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
        </div>
      </div>
    );
  }
}

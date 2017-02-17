import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SessionList from './Components/SessionList';
import SearchForm from './Components/SearchForm';
import Searchbar from './Components/Searchbar';
import LoginModal from './Components/LoginModal';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      sessions: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://localhost:3001/gamesessions`)
      .then(response => {
        console.log(response.data);
        this.setState({
          sessions: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.sessions);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gamefriendly.io</h1>
            <h1 className="browse-button">Browse</h1>
            <h1 className="create-session">Create Session</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <SessionList data={this.state.sessions} />
          }
        </div>
      </div>
    );
  }
}

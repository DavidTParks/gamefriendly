import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import GameSessionCard from './GameSessionCard';
import Searchbar from './Searchbar';
import Navigation from './Navigation';
var Navbar = ReactBootstrap.Navbar,
Nav = ReactBootstrap.Nav,
NavDropdown = ReactBootstrap.NavDropdown,
NavItem = ReactBootstrap.NavItem,
DropdownButton = ReactBootstrap.DropdownButton,
FormGroup = ReactBootstrap.FormGroup,
Jumbotron = ReactBootstrap.Jumbotron,
PageHeader = ReactBootstrap.PageHeader,
Button = ReactBootstrap.Button,
FormControl = ReactBootstrap.FormControl,
Row = ReactBootstrap.Row,
Thumbnail = ReactBootstrap.Thumbnail,
Col = ReactBootstrap.Col,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Jumbotron className="Jumbotron">
          <h1>Welcome to GameFriendly.io!</h1>
          <p>Create Game Sessions, party up, and meet new people. Any games, any platforms.</p>
          <p><Button bsStyle="primary">Start playing</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

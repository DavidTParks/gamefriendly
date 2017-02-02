import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
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

class GameSessionCard extends Component {
  render() {
    return (
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
       <h3>Thumbnail label</h3>
       <p>Description</p>
       <p>
         <Button bsStyle="primary">Button</Button>&nbsp;
         <Button bsStyle="default">Button</Button>
       </p>
     </Thumbnail>
    );
  }
}

export default GameSessionCard;

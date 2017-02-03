import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import Searchbar from './Searchbar';
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
DropdownButton = ReactBootstrap.DropdownButton,
ButtonGroup = ReactBootstrap.ButtonGroup,
Thumbnail = ReactBootstrap.Thumbnail,
Col = ReactBootstrap.Col,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">GameFriendly.io</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Browse</NavItem>
              <Searchbar />
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4} href="#"><Button navbar-btn bsSize="xsmall" bsStyle="info">Create Game Session</Button></NavItem>
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
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
DropdownButton = ReactBootstrap.DropdownButton,
ButtonGroup = ReactBootstrap.ButtonGroup,
Thumbnail = ReactBootstrap.Thumbnail,
Col = ReactBootstrap.Col,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

class Searchbar extends Component {
  render() {
    return (
      <Navbar.Form pullLeft>
       <FormGroup>
         <FormControl className="Search" type="text" placeholder="Search for games" />
       </FormGroup>
       {' '}
       <Button bsStyle="info" type="submit">Search</Button>
     </Navbar.Form>
    );
  }
}

export default Searchbar;

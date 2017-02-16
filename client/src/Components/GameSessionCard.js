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
Tooltip = ReactBootstrap.Tooltip,
Col = ReactBootstrap.Col,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

class GameSessionCard extends Component {
  render() {
    return (
      <Thumbnail relative src="https://blzgdapipro-a.akamaihd.net/media/screenshot/soldier-76-screenshot-002.jpg" alt="242x200">
       <h3>{this.props.title}</h3>
       <p>{this.props.description}</p>
       <p>Platform: Xbox One</p>
       <p>
       <ButtonGroup justified>
          <Button bsStyle="info" href="#">Join</Button>
          <Button className="Discordbutton" href="#">Open Discord</Button>
        </ButtonGroup>
       </p>
     </Thumbnail>
    );
  }
}

export default GameSessionCard;

import React from 'react';
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
Grid = ReactBootstrap.Grid,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

const GameSessionCard = props => (
  <li className="game-card">
    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
      <h3>{props.title}</h3>
      <p>{props.game}</p>
      <p>
        <Button bsStyle="primary">Button</Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </li>
);

export default GameSessionCard;

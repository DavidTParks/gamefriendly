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
  <li className="gif-wrap">
    <Thumbnail className="thumbs">
      <h3>{props.title}</h3>
      <h4>{props.game}</h4>
      <h4>{props.platform}</h4>
      <h5>Region: {props.region}</h5>
      <h5>{props.description}</h5>
      <h5>Last updated 7 mins ago</h5>
    </Thumbnail>
  </li>
);

export default GameSessionCard;

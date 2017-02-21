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
Tooltip = ReactBootstrap.Tooltip,
Button = ReactBootstrap.Button,
FormControl = ReactBootstrap.FormControl,
Row = ReactBootstrap.Row,
Badge = ReactBootstrap.Badge,
DropdownButton = ReactBootstrap.DropdownButton,
ButtonGroup = ReactBootstrap.ButtonGroup,
Thumbnail = ReactBootstrap.Thumbnail,
Col = ReactBootstrap.Col,
Grid = ReactBootstrap.Grid,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

const GameSessionCard = props => (
  <li className="gif-wrap">
    <Thumbnail className="thumbs" src="https://i.ytimg.com/vi/73ZbNehh_HQ/maxresdefault.jpg" alt="242x200">
      <h4 className="card-title">{props.title}</h4>
      <h4>{props.game}</h4>
      <h4>{props.platform}</h4>
      <h5>{props.description}</h5>
      <h5 className="region-identifier">{props.region}</h5>
      <Button bsStyle="primary" className="Discordbutton">Join Discord</Button>
    </Thumbnail>
  </li>
);

export default GameSessionCard;

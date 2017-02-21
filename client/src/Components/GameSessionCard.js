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

const GameSessionCard = props => {
  let imgSrc;
  if(props.game === "Overwatch") {
    imgSrc = "http://www.hdwallpaper.nu/wp-content/uploads/2016/05/overwatch-all-heroes-wallpaper-hd.jpg";
  } else if(props.game === "Arma 3") {
    imgSrc = "https://i.ytimg.com/vi/73ZbNehh_HQ/maxresdefault.jpg";
  } else if(props.game === "League of Legends") {
    imgSrc = "https://tctechcrunch2011.files.wordpress.com/2015/12/league-of-legends.png?w=1372";
  } else {
    imgSrc = "https://cracked-games.org/wp-content/uploads/2016/05/Garrysmodbild.jpg";
  }

  return (
    <li className="gif-wrap">
      <Tooltip placement="left" className="in" id="tooltip-left">7 mins ago</Tooltip>
      <Thumbnail className="thumbs" src={imgSrc} alt="242x200">
        <h4 className="card-title">{props.title}</h4>
        <h4>Game: {props.game}</h4>
        <h4>Platform: {props.platform}</h4>
        <h5>{props.description}</h5>
        <h5 className="region-identifier">Region: {props.region}</h5>
        <Button bsStyle="primary" className="Discordbutton">Join Discord</Button>
      </Thumbnail>
    </li>
  );
}

export default GameSessionCard;

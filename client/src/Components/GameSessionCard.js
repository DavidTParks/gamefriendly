import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import timeago from 'timeago.js';
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
  } else if(props.game === "Gary's Mod"){
    imgSrc = "https://cracked-games.org/wp-content/uploads/2016/05/Garrysmodbild.jpg";
  }  else {
    imgSrc = ""
  }

  var updatedTime = new timeago().format(props.updatedAt);

  return (
    <li className="gif-wrap">
      <Tooltip placement="left" className="in" id="tooltip-left">{updatedTime}</Tooltip>
      <Thumbnail className="thumbs" src={imgSrc} alt="242x200">
        <h4 className="card-title">{props.title}</h4>
        <h4>Game: {props.game}</h4>
        <h4>Platform: {props.platform}</h4>
        <h4>{props.description}</h4>
        <h4 className="region-identifier">Region: {props.region}</h4>
        <Button bsStyle="primary" bsSize="large" className="Discordbutton"><i className="material-icons ic_chat">chat</i>  Discord</Button>
      </Thumbnail>
    </li>
  );
}

export default GameSessionCard;

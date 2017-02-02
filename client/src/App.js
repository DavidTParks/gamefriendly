import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import GameSessionCard from './GameSessionCard';
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gamefriendly.io</h2>
        </div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">GameFriendly.io</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
                <Navbar.Form inverse pullLeft>
                 <FormGroup>
                   <FormControl className="Search" type="text" placeholder="Search for games" />
                 </FormGroup>
                 {' '}
                 <Button type="submit">Search</Button>
               </Navbar.Form>
            </Nav>
            <Nav PullRight>

            </Nav>
            /*
            <Nav pullRight>
              <NavItem eventKey={4} href="#"><Button navbar-btn bsSize="xsmall" bsStyle="primary">Create Game Session</Button></NavItem>
              <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
              </NavDropdown>
              */
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="Jumbotron">
          <h1>Welcome to GameFriendly.io!</h1>
          <p>Create Game Sessions, party up, and meet new people. Any games, any platforms.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
        <PageHeader>Recent Game Sessions</PageHeader>
        <Row className="global-grid">
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xsHidden md={3}>
            <GameSessionCard />
         </Col>
        </Row>
        <Row className="global-grid">
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xs={6} md={3}>
            <GameSessionCard />
          </Col>
          <Col xsHidden md={3}>
            <GameSessionCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

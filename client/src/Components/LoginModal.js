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
Modal = ReactBootstrap.Modal,
Form = ReactBootstrap.Form,
Checkbox = ReactBootstrap.Checkbox,
ControlLabel = ReactBootstrap.ControlLabel,
DropdownButton = ReactBootstrap.DropdownButton,
ButtonGroup = ReactBootstrap.ButtonGroup,
Thumbnail = ReactBootstrap.Thumbnail,
Col = ReactBootstrap.Col,
Tooltip = ReactBootstrap.Tooltip,
Popover = ReactBootstrap.Popover,
OverlayTrigger = ReactBootstrap.OverlayTrigger,
FormControl = ReactBootstrap.FormControl,
MenuItem = ReactBootstrap.MenuItem;

class LoginModal extends Component {
  constructor(props, context) {
  super(props, context);

  this.state = {
    showModal: false
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div>
        <Button className="login-button" bsSize = "xsmall" onClick={this.open}>Login/Signup</Button>
        <div>
          <Modal className="modal-container"
            show={this.state.showModal}
            onHide={this.close}
            animation={true}
            bsSize="medium">

            <Modal.Header closeButton>
              <Modal.Title>Login to Gamefriendly</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close}>Exit</Button>
              <Button bsStyle="primary">Signup</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
   }
}

export default LoginModal;

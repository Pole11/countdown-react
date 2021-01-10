import React, { Component }  from 'react';
import { Navbar, Nav }  from 'react-bootstrap';
import { ToggleDarkMode } from './dark-mode.component';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" style={{minHeight: "10vh"}}>
        <Navbar.Brand href="/"><h1>⏱</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/countdown">Countdown</Nav.Link>
          </Nav>
        <ToggleDarkMode />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
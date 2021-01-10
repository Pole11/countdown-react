import React, { Component } from 'react';
import { Navbar, Nav }  from 'react-bootstrap';

export default class FooterComponent extends Component {
  render() {
    return (
      <Navbar id ="footer" bg="dark" variant="dark" expand="lg" style={{minHeight: "10vh"}}>
        <Navbar.Text href="/" className="mx-auto">Countdown built by Pole</Navbar.Text>
          <Nav className="mx-auto">
            <Nav.Link href="https://github.com/Pole11">Github</Nav.Link>
            <Nav.Link href="https://twitter.com/pole_11">Twitter</Nav.Link>
            <Nav.Link href="https://www.reddit.com/user/Pole_11">Reddit</Nav.Link>
          </Nav>
      </Navbar>
    );
  }
}
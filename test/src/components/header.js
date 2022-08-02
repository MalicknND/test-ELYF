import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" style={{ marginBottom: '50px' }}>
        <Container>
          <Navbar.Brand href="/">Open Food</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Open Food</Navbar.Brand>
          <Nav className="me-auto">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Rechercher
              </button>
            </form>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;

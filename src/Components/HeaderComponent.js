import React, {} from 'react';
import {Navbar, Container,Nav} from "react-bootstrap";
function  Header  (props) {
    return (
      <>
        <Navbar expand="lg">
          <Container className="header-navbar">

            <Navbar.Brand href="/home"><img src="/assets/image/logo.png" alt="" /><span className="navbar-header">Med Zone</span></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link href="/home"><span className="color-header">Home</span></Nav.Link>
                
                <Nav.Link href="/login"><span className="color-header">Log in</span></Nav.Link>
                
                <Nav.Link href="/signup"><span className="color-header">Sign up</span></Nav.Link>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
  );
};

export default Header;
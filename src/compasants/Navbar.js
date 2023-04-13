import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';





const Navbare = () => {
    return ( <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CINE STREAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#FILMS">FILMS</Nav.Link>
              <Nav.Link href="#NOUVAUTES">NOUVAUTES</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#SECONNECTER">
                SE CONNECTER
              </Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  
  
      </div>
    );
  }
    

 
export default Navbare;
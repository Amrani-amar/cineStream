

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "mt-5 footer-darkmode" : "mt-5 footer-lightmode"}>
      <Container fluid className="bg-light" >
        <Row className="py-3">
          <Col md="4">
            <h5 className="mb-3">Cinestream</h5>
            <p>les meilleurs films que vous devez voir sont disponible en 4k et en haute resolutions et sur tout vos appareils</p>
          </Col>
          <Col md="4">
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5 className="mb-3">Contact</h5>
            <p>123 AZAZGA</p>
            <p>15300 TIZI OUZOU</p>
            <p>info@company.com</p>
            <p>026 34 00 00</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark text-light text-center py-2">
        <small>© 2023 CineStream. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;


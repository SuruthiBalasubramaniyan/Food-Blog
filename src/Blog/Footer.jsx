import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="footer mt-2 bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Taste And Tempt</h5>
            <p>Your go-to blog for delicious recipes and culinary inspiration!</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
             
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Taste And Tempt. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

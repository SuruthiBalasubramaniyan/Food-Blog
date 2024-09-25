 import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignupModal from './Sign-up';  
import LoginModal from './logiin';  
import { useCart } from '../Blog/Food/Context';
import Check from './Food/Check';

const NavbarComponent = () => {
  const { cart } = useCart();
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar sticky='top' bg="dark" expand="lg">
        <Navbar.Brand>
          <a href="/" className='navlink px-4'>
            Taste And Tempt
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-4">
            <Nav.Link href="/" className='px-4 text-light'>See Here</Nav.Link>
            <Nav.Link href="/about" className='px-4 text-light'>About</Nav.Link>
            <Nav.Link href="/recipe" className='px-4 text-light'>Taste Here</Nav.Link>
            <Nav.Link onClick={handleShowSignup} className='px-4 text-light'>Sign-Up</Nav.Link>
            <Nav.Link onClick={handleShowLogin} className='px-4 text-light'>Login</Nav.Link>
            <Nav.Link href="/menu" className='px-4 text-light'>Menu</Nav.Link>
            <Nav.Link className='px-4 text-light'>
              <Check />
              {cart.length > 0 && <span className="badge rounded-circle me-3 bg-danger ms-2">{cart.length}</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <SignupModal show={showSignup} handleClose={handleCloseSignup} />
      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default NavbarComponent;

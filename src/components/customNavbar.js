import React from 'react';
import { Link } from 'gatsby';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import '../styles/customNavbar.scss';

const CustomNavbar = () => {
  const isActive = ({ isCurrent }) => (isCurrent ? { className: 'nav-link active' } : null);
  return (

    <>
      <Navbar expand="lg" className="navbar-dark justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Link to="/" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="home">
                  Home
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/menu" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="menu">
                  Menu
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/services" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="services">
                  Services
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/blog" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="menublog">
                  Blog
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="about">
                  About
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link" getProps={isActive}>
                <Nav.Link as="span" eventKey="menu">
                  Contact
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

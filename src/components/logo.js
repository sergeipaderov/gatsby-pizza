import React from 'react';
import { Link } from 'gatsby';
import {
  Navbar,
} from 'react-bootstrap';
import { FaPizzaSlice } from 'react-icons/fa';
import '../styles/logo.scss';

const Logo = () => (
  <>
    <Link to="/" className="link-no-style logo-container">
      <div className="brand-container">
        <FaPizzaSlice className="logo-icon" />
        <Navbar.Brand className="navbar-brand" as="span">Pizza</Navbar.Brand>
      </div>
      <small>Delicous</small>
    </Link>
  </>
);

export default Logo;

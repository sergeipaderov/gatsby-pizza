// import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react';

import CustomNavbar from './customNavbar';
import Logo from './logo';

import '../styles/header.scss';

const Header = ({ siteTitle, pageInfo }) => (
  <header className="header">
    <div className="header-container">
      <Logo />
      <CustomNavbar pageInfo={pageInfo} />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageInfo: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  pageInfo: '',
};

export default Header;

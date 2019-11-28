import React from 'react';
import { Link } from 'gatsby';
import {
  Row, Col,
} from 'react-bootstrap';

import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { MdPhone, MdMyLocation } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';


import '../styles/contactInfo.scss';

const ContactInfo = () => (
  <div className="container-wrap">
    <Row className="wrap d-md-flex">
      <Col xl={{ span: 7, offset: 1 }} sm={12} className="info">
        <Row className="no-gutters">
          <Col md={4} className="d-flex ftco-animate item-info-container">
            <div className="icon"><MdPhone /></div>
            <div className="text">
              <h3>000 (123) 456 7890</h3>
              <p>A small river named Duden flows</p>
            </div>
          </Col>
          <Col md={4} className="d-flex ftco-animate">
            <div className="icon"><MdMyLocation /></div>
            <div className="text">
              <h3>198 West 21th Street</h3>
              <p>Suite 721 New York NY 10016</p>
            </div>
          </Col>
          <Col md={4} className="d-flex ftco-animate">
            <div className="icon"><FaRegClock /></div>
            <div className="text">
              <h3>Open Monday-Friday</h3>
              <p>8:00am - 9:00pm</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xl={4} xs={12} className="social d-md-flex align-items-center">
        <ul className="social-icon">
          <li className="ftco-animate"><Link to="/"><TiSocialTwitter className="social-icons" /></Link></li>
          <li className="ftco-animate"><Link to="/"><TiSocialFacebook className="social-icons" /></Link></li>
          <li className="ftco-animate"><Link to="/"><TiSocialInstagram className="social-icons" /></Link></li>
        </ul>
      </Col>
    </Row>
  </div>
);

export default ContactInfo;

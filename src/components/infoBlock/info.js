import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import { Link } from 'gatsby';

import '../../styles/contactBlock.scss';

const Info = () => (
  <Row className="contact-wrapper">
    <Col md={12} className="mb-4">
      <h2 className="h4">Contact Information</h2>
    </Col>
    <Col md={12} className=" mb-3">
      <p>
        <span>Address:</span>
        {' '}
              198 West 21th Street, Suite 721 New York NY 10016
      </p>
    </Col>
    <Col md={12} className="mb-3">
      <p>
        <span>Phone:</span>
        <a href="tel://1234567920">+ 1235 2355 98</a>
      </p>
    </Col>
    <Col md={12} className="mb-3">
      <p>
        <span>Email:</span>
        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
      </p>
    </Col>
    <Col md={12} className="mb-3">
      <p>
        <span>Website:</span>
        <Link to="/">yoursite.com</Link>
      </p>
    </Col>
  </Row>
);

export default Info;

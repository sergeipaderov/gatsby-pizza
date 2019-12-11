import React from 'react';
import { Link } from 'gatsby';
import {
  Row, Col, Overlay,
} from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';

import '../styles/galleryBlock.scss';

const ServicesBlock = () => (
  <div className="ftco-section ftco-gallery">
    <Overlay />
    <Row className="no-gutters">
      <Col md={3} className="ftco-animate">
        <Link to="/about" className="gallery img d-flex align-items-center" style={{ backgroundImage: 'url("../images/gallery-1.jpg")' }}>
          <div className="icon mb-4 d-flex align-items-center justify-content-center">
            <FaSearch className="gallery-icon" />
          </div>
        </Link>
      </Col>
      <Col md={3} className="ftco-animate">
        <Link to="/about" className="gallery img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-2.jpg)' }}>
          <div className="icon mb-4 d-flex align-items-center justify-content-center">
            <FaSearch className="gallery-icon" />
          </div>
        </Link>
      </Col>
      <Col md={3} className="ftco-animate">
        <Link to="/about" className="gallery img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}>
          <div className="icon mb-4 d-flex align-items-center justify-content-center">
            <FaSearch className="gallery-icon" />
          </div>
        </Link>
      </Col>
      <Col md={3} className="ftco-animate">
        <Link to="/about" className="gallery img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}>
          <div className="icon mb-4 d-flex align-items-center justify-content-center">
            <FaSearch className="gallery-icon" />
          </div>
        </Link>
      </Col>
    </Row>
  </div>
);

export default ServicesBlock;

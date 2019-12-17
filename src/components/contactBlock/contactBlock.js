import React from 'react';
import {
  Row, Col, Overlay,
} from 'react-bootstrap';

import FormMessage from './formMessage';

import '../../styles/contactBlock.scss';

const ContactBlock = () => (

  <div className="ftco-appointment">
    <Overlay />
    <div className="container-wrap">
      <Row className="no-gutters d-md-flex align-items-center">
        <Col md={6} className="d-flex align-self-stretch">
          <div id="map" />
        </Col>
        <Col md={6} className="appointment ftco-animate">
          <FormMessage />
        </Col>
      </Row>
    </div>
  </div>
);

export default ContactBlock;

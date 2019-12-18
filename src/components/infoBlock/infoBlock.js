import React from 'react';

import {
  Row, Col, Container,
} from 'react-bootstrap';

import FormMessage from './infoMessage';
import Info from './info';

import '../../styles/contactBlock.scss';

const InfoBlock = () => (

  <div className="ftco-section contact-section">
    <Container className="mt-5 mb-5 pb-5">
      <Row className="block-9">
        <Col md={4} className="contact-info ftco-animate">
          <Info />
        </Col>
        <Col md={1} />
        <Col md={6} className="ftco-animate">
          <FormMessage />
        </Col>
      </Row>
    </Container>
  </div>
);

export default InfoBlock;

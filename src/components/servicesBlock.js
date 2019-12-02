import React from 'react';
import {
  Row, Col, Container, Overlay,
} from 'react-bootstrap';

import { GiFruitBowl } from 'react-icons/gi';
import { IoMdBicycle } from 'react-icons/io';
import { FaPizzaSlice } from 'react-icons/fa';

import '../styles/firstSection.scss';

const ServicesBlock = () => (
  <div className="ftco-section ftco-services">
    <Overlay />
    <Container>
      <Row className="justify-content-center mb-5 pb-3">
        <Col className="heading-section ftco-animate text-center md-7">
          <h2 className="mb-4">Our Services</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} mb={2} className="md-4 ftco-animate service-item">
          <div className="media d-block text-center block-6 services">
            <div className="icon d-flex justify-content-center align-items-center mb-5">
              <GiFruitBowl className="services-icon" />
            </div>
            <div className="media-body">
              <h3 className="heading">Healthy Foods</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} mb={2} className="md-4 ftco-animate service-item">
          <div className="media d-block text-center block-6 services">
            <div className="icon d-flex justify-content-center align-items-center mb-5">
              <IoMdBicycle className="services-icon" />
            </div>
            <div className="media-body">
              <h3 className="heading">Fastest Delivery</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} className="md-4 ftco-animate service-item">
          <div className="media d-block text-center block-6 services">
            <div className="icon d-flex justify-content-center align-items-center mb-5">
              <FaPizzaSlice className="services-icon" />
            </div>
            <div className="media-body">
              <h3 className="heading">Original Recipes</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ServicesBlock;

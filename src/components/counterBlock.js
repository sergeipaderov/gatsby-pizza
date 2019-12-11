import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import { Parallax } from 'react-parallax';

import { FaPizzaSlice, FaMedal, FaRegLaughBeam } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

import '../styles/counterBlock.scss';

const ServicesBlock = () => (
  <div className="ftco-counter section-counter ftco-bg-dark img" id="section-counter">
    <Parallax
      className="parallax"
      bgImage={require('../images/bg_2.jpg')}
      bgImageAlt="the cat"
      strength={500}
    >
      <div className="bg" />
      <Row className="justify-content-center counter-wrapper">
        <Col md={10} className="counter-content">
          <Row>
            <Col md={6} lg={3} className="counter-column d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <div className="icon"><FaPizzaSlice outlined className="counter-icon" /></div>
                  <strong className="number" data-number="100">100</strong>
                  <span>Pizza Branches</span>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="counter-column d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <div className="icon"><FaMedal className="counter-icon" /></div>
                  <strong className="number" data-number="85">85</strong>
                  <span>Number of Awards</span>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="counter-column d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <div className="icon"><FaRegLaughBeam className="counter-icon" /></div>
                  <strong className="number" data-number="10567">10,567</strong>
                  <span>Happy Customer</span>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="counter-column d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <div className="icon"><GiChefToque Outlined className="counter-icon" /></div>
                  <strong className="number" data-number="900">900</strong>
                  <span>Staff</span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Parallax>
  </div>
);

export default ServicesBlock;

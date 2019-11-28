import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import { FaPizzaSlice } from 'react-icons/fa';

import '../styles/about.scss';

const About = () => (
  <div className="container-wrap about">
    <Row className="wrap about d-md-flex">
      <Col xl={6} sm={12} className="one-half img" />
      <Col xl={6} xs={12} className="one-half text ftco-animate">
        <div className="heading-section ftco-animate ">
          <h2 className="mb-4">
            Welcome to
            {' '}
            <FaPizzaSlice className="pizza-icon" />
            <span className="pizza-span">Pizza</span>
            {' '}
            A Restaurant
          </h2>
        </div>
        <div>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default About;

import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import '../../styles/infoBlock.scss';

const InfoMessage = () => (
  <form action="#" className="contact-form">
    <Row className="form-wrapper">
      <Col md={6}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
      </Col>
      <Col md={6}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your Email" />
        </div>
      </Col>
    </Row>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Subject" />
    </div>
    <div className="form-group">
      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message" />
    </div>
    <div className="form-group">
      <input type="submit" value="Send Message" className="btn btn-submit py-3 px-5" />
    </div>
  </form>
);

export default InfoMessage;

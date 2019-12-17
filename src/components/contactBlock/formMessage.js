import React from 'react';
import {
  Col,
} from 'react-bootstrap';

import '../../styles/contactBlock.scss';

const FormMessage = () => (
  <div className="entry align-self-stretch">
    <h3 className="mb-3">Contact Us</h3>
    <form action="#" className="appointment-form">
      <div className="d-md-flex">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
      </div>
      <div className="d-me-flex">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
      </div>
      <div className="form-group">
        <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Message" />
      </div>
      <div className="form-group">
        <input type="submit" value="Send" className="btn btn-submit py-3 px-4" />
      </div>
    </form>
  </div>
);

export default FormMessage;

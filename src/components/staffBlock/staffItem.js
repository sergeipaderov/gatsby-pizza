import React from 'react';
import {
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../styles/staff.scss';

const StaffItem = (props) => {
  const {
    name, position, description, photo, md,
  } = props;

  return (
    <Col lg={3} md={md} className="d-flex mb-sm-4 ftco-animate">
      <div className="staff">
        <div className="img mb-4" style={{ backgroundImage: `url(${photo})` }} />
        <div className="info text-center">
          <h3><a href="teacher-single.html">{name}</a></h3>
          <span className="position">{position}</span>
          <div className="text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

StaffItem.defaultProps = {
  name: '',
  position: '',
  description: '',
  photo: '',
  md: 4,
};

StaffItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  md: PropTypes.number,
};

export default StaffItem;

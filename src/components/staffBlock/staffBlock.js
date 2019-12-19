import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import StaffItem from './staffItem';


import {
  staff,
} from '../mock';

import '../../styles/staff.scss';

const staffList = staff.slice(0, 4);


const StaffBlock = () => (
  <div className="ftco-section pb-5 mb-5">
    <Container>
      <Row className="justify-content-center mb-5 pb-3">
        <Col md={7} className="heading-section ftco-animate text-center">
          <h2 className="mb-4">Our Chef</h2>
          <p className="flip">
            <span className="deg1" />
            <span className="deg2" />
            <span className="deg3" />
          </p>
          <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </Col>
      </Row>
      <Row>
        {staffList.map((item) => (
          <StaffItem
            md={3}
            key={item.id}
            name={item.name}
            position={item.position}
            description={item.description}
            photo={item.photo}
          />
        ))}
      </Row>
    </Container>
  </div>
);

export default StaffBlock;

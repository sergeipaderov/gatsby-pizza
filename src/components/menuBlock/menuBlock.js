import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import MenuItem from './menuItem';

import {
  pizza,
} from '../mock';

import '../../styles/menuBlock.scss';

const MenuBlock = () => (
  <div className="ftco-section ftco-section">
    <Row style={{ margin: 0 }} className="justify-content-center mb-5 pb-3">
      <Col md={7} className="heading-section ftco-animate text-center">
        <h2 className="mb-4">Hot Pizza Meals</h2>
        <p className="menu-description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </Col>
    </Row>
    <Row className="no-gutters d-flex">
      {pizza.map((item) => (
        <MenuItem
          key={item.id}
          itemImage={item.cover}
          itemTitle={item.title}
          itemText={item.description}
          itemPrice={item.price}
        />
      ))}
      <Row className="row no-gutters d-flex">
        {pizza.map((item) => (
          <MenuItem
            reversed
            key={item.id}
            itemImage={item.cover}
            itemTitle={item.title}
            itemText={item.description}
            itemPrice={item.price}
          />
        ))}
      </Row>
    </Row>
  </div>
);

export default MenuBlock;

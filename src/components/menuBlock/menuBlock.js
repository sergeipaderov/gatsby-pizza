import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import MenuItem from './menuItem';

import '../../styles/menuBlock.scss';

const MenuBlock = () => (
  <div className="ftco-section ftco-section">
    {/* <Container className="container"> */}
    <Row className="justify-content-center mb-5 pb-3">
      <Col md={7} className="md-7 heading-section ftco-animate text-center">
        <h2 className="mb-4">Hot Pizza Meals</h2>
        <p className="menu-description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </Col>
    </Row>
    {/* </Container> */}
    {/* <Container className="container-wrap"> */}
    <Row className="row no-gutters d-flex">
      <MenuItem
        itemImage="../../images/pizza-1.jpg"
        itemTitle="Italian Pizza"
        itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        itemPrice="2.90"
      />
      <MenuItem
        itemImage="../../images/pizza-2.jpg"
        itemTitle="Greek Pizza"
        itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        itemPrice="2.90"

      />
      <MenuItem
        itemImage="../../images/pizza-3.jpg"
        itemTitle="Caucasian Pizza"
        itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        itemPrice="2.90"
      />
      <Row className="row no-gutters d-flex">
        <MenuItem
          itemImage="../../images/pizza-4.jpg"
          itemTitle="American Pizza"
          itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          itemPrice="2.90"
          reversed
        />
        <MenuItem
          itemImage="../../images/pizza-5.jpg"
          itemTitle="Tomatoe Pie"
          itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          itemPrice="2.90"
          reversed
        />
        <MenuItem
          itemImage="../../images/pizza-6.jpg"
          itemTitle="Margherita"
          itemText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          itemPrice="2.90"
          reversed
        />
      </Row>
    </Row>
    {/* </Container> */}
  </div>
);

export default MenuBlock;

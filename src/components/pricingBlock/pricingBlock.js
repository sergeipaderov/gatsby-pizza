import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import PricingItem from './pricingItem';

import '../../styles/pricingBlock.scss';

const PricingBlock = () => (
  <div className="ftco-section ftco-section">
    <Container>
      <Row className="justify-content-center mb-5 pb-3">
        <Col className="md-7 heading-section text-center ftco-animate">
          <h2 className="mb-4">Our Menu Pricing</h2>
          <p className="flip">
            <span className="deg1" />
            <span className="deg2" />
            <span className="deg3" />
          </p>
          <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </Col>
      </Row>
      <Row>
        <Col className="md-6">
          <PricingItem
          itemImage="../../images/pizza-1.jpg"
          itemTitle="Italian Pizza"
          itemText="A small river named Duden flows by their place and supplies"
          itemPrice="20.00"
        />
        <PricingItem
          itemImage="../../images/pizza-2.jpg"
          itemTitle="Hawaiian Pizza"
          itemText="A small river named Duden flows by their place and supplies"
          itemPrice="29.00"
        />
        <PricingItem
          itemImage="../../images/pizza-3.jpg"
          itemTitle="Greek Pizza"
          itemText="A small river named Duden flows by their place and supplies"
          itemPrice="31.00"
        />
        <PricingItem
          itemImage="../../images/pizza-4.jpg"
          itemTitle="Bacon Crispy Thins"
          itemText="A small river named Duden flows by their place and supplies"
          itemPrice="23.00"
        />
      </Col>

        <Col className="md-6">
          <PricingItem
            itemImage="../../images/pizza-5.jpg"
            itemTitle="Hawaiian Special"
            itemText="A small river named Duden flows by their place and supplies"
            itemPrice="49.91"
          />
          <PricingItem
            itemImage="../../images/pizza-6.jpg"
            itemTitle="Ultimate Overload"
            itemText="A small river named Duden flows by their place and supplies"
            itemPrice="39.99"
          />
          <PricingItem
            itemImage="../../images/pizza-1.jpg"
            itemTitle="Bacon Pizza"
            itemText="A small river named Duden flows by their place and supplies"
            itemPrice="19.99"
          />
          <PricingItem
            itemImage="../../images/pizza-2.jpg"
            itemTitle="Ham &amp; Pineapple"
            itemText="A small river named Duden flows by their place and supplies"
            itemPrice="20.00"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default PricingBlock;

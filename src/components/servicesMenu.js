import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import FoodMenuItem from './foodMenu/foodMenuItem';


import {
  pizza,
} from './mock';

const pizzaList = pizza.slice(0, 4);


const ServicesMenu = () => (
  <div className="ftco-section">
    <Container>
      <Row className="justify-content-center mb-5 pb-3">
        <Col md={7} className="heading-section ftco-animate text-center">
          <h2 className="mb-4">Hot Meals</h2>
          <p className="flip">
            <span className="deg1" />
            <span className="deg2" />
            <span className="deg3" />
          </p>
          <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </Col>
      </Row>
      <Row>
        {pizzaList.map((item) => (
          <FoodMenuItem
            md={3}
            key={item.id}
            itemImage={item.cover}
            itemTitle={item.title}
            itemText={item.description}
            itemPrice={item.price}
          />
        ))}
      </Row>
    </Container>
  </div>
);

export default ServicesMenu;

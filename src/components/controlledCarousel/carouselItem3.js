import React from 'react';
import { Link } from 'gatsby';

import '../../styles/carouselItem.scss';

import {
  Container,
  Button,
} from 'react-bootstrap';

const CarouselItem3 = () => (
  <Container className="item-container">
    <div className="col-md-7 col-sm-12 text-center ftco-animate text-item_tird">
      <span className="subheading">Welcome</span>
      <h1 className="mb-4 title">We cooked your desired Pizza Recipe</h1>
      <p className="mb-4 mb-md-5 description">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      <p>
        <Link to="/contact"><Button variant="primary" className="main-button">Order Now</Button></Link>
        <Link to="/menu"><Button variant="outline-primary" className="secondary-button">View Menu</Button></Link>
      </p>
    </div>
  </Container>
);

export default CarouselItem3;

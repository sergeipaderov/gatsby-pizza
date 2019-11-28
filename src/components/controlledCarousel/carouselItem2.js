import React from 'react';
import { Link } from 'gatsby';

import '../../styles/carouselItem.scss';

import {
  Container,
  Button,
} from 'react-bootstrap';

const CarouselItem2 = () => (
  <Container className="item-container">
    <div className="col-md-6 col-sm-12 order-md-last ftco-animate text-item_inverted">
      <span className="subheading">Crunchy</span>
      <h1 className="mb-4 title">Italian Pizza</h1>
      <p className="mb-4 mb-md-5 description">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      <p>
        <Link to="/contact"><Button variant="primary" className="main-button">Order Now</Button></Link>
        <Link to="/menu"><Button variant="outline-primary" className="secondary-button">View Menu</Button></Link>
      </p>
    </div>
    <div className="col-md-6 ftco-animate img-item_iverted">
      <img src="images/bg_2.png" className="img-fluid" alt="" />
    </div>
  </Container>
);

export default CarouselItem2;

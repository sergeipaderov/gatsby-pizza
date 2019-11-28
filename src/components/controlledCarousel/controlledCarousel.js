import React from 'react';

import { Carousel } from 'react-bootstrap';
import CarouselItem1 from './carouselItem1';
import CarouselItem2 from './carouselItem2';
import CarouselItem3 from './carouselItem3';

import '../../styles/controlledCarousel.scss';


const ControlledCarousel = () => (
  <Carousel controls={false} className="carousel">
    <Carousel.Item className="carousel-item">
      <CarouselItem1 />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <CarouselItem2 />
    </Carousel.Item>
    <Carousel.Item className="last-carousel-item">
      <CarouselItem3 />
    </Carousel.Item>
  </Carousel>

);

export default ControlledCarousel;

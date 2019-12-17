import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import FoodMenuItem from './itemBlog';

import {
  blogPosts,
} from '../mock';

import '../../styles/blog.scss';

const blogList = blogPosts.slice(0, 3);

const Blog = () => (

  <div className="ftco-section">
    <Container>
      <Row className="justify-content-center mb-5 pb-3">
        <Col md={7} className="heading-section ftco-animate text-center">
          <h2 className="mb-4">Recent from blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </Col>
      </Row>
      <Row className="d-flex">
        {blogList.map((item) => (
          <FoodMenuItem
            key={item.id}
            cover={item.cover}
            date={item.date}
            member={item.member}
            comments={item.comments}
            title={item.title}
            text={item.text}
          />
        ))}
      </Row>
    </Container>
  </div>
);

export default Blog;

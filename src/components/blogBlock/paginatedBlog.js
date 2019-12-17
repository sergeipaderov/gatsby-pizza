import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import FoodMenuItem from './itemBlog';

import {
  blogPosts,
} from '../mock';

import '../../styles/blog.scss';

const PaginatedBlog = () => {
  const active = 1;
  const items = [];

  // eslint-disable-next-line no-plusplus
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="ftco-section">
      <Container>
        <Row className="justify-content-center mb-5 pb-3">
          <Col md={7} className="heading-section ftco-animate text-center">
            <h2 className="mb-4">Read our blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </Col>
        </Row>
        <Row className="d-flex">
          {blogPosts.map((item) => (
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
          <div className="pagination-block">
            <Pagination>
              <Pagination.Prev />
              {items}
              <Pagination.Next />
            </Pagination>
          </div>

        </Row>
      </Container>
    </div>
  );
};

export default PaginatedBlog;

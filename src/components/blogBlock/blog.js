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
        {/* <Col md={4} className="d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <Link to="/blog" className="block-20" style={{ backgroundImage: "url('images/image_1.jpg')" }} />
            <div className="text py-4 d-block">
              <div className="meta">
                <div><Link to="/">Sept 10, 2018</Link></div>
                <div><Link to="/">Admin</Link></div>
                <div>
                  <Link to="/" className="meta-chat">
                    <span className="icon-chat" />
                    {' '}
3
                  </Link>

                </div>
              </div>
              <h3 className="heading mt-2"><Link to="/">The Delicious Pizza</Link></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col> */}
        {/* <Col md={4} className="d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <Link to="/blog" className="block-20" style={{ backgroundImage: "url('images/image_2.jpg')" }} />
            <div className="text py-4 d-block">
              <div className="meta">
                <div><Link to="/">Sept 10, 2018</Link></div>
                <div><Link to="/">Admin</Link></div>
                <div>
                  <Link to="/" className="meta-chat">
                    <span className="icon-chat" />
                    {' '}
3
                  </Link>

                </div>
              </div>
              <h3 className="heading mt-2"><Link to="/">The Delicious Pizza</Link></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col>
        <Col md={4} className="d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <Link href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }} />
            <div className="text py-4 d-block">
              <div className="meta">
                <div><Link to="/">Sept 10, 2018</Link></div>
                <div><Link to="/">Admin</Link></div>
                <div>
                  <Link to="/" className="meta-chat">
                    <span className="icon-chat" />
                    {' '}
3
                  </Link>

                </div>
              </div>
              <h3 className="heading mt-2"><Link to="/">The Delicious Pizza</Link></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  </div>
);

export default Blog;

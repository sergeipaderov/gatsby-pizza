import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';


const Menu = () => (
  <Layout pageInfo={{ pageName: 'blog' }}>
    <SEO title="Blog" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <FirstSection title="Read Our Blog" buttonName="BLog" linkPath="blog" />
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu
;
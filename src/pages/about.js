import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';

const Menu = () => (
  <Layout pageInfo={{ pageName: 'about' }}>
    <SEO title="About" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <FirstSection title="About" buttonName="About" linkPath="about" />
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

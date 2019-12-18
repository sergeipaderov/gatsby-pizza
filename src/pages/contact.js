import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';
import InfoBlock from '../components/infoBlock/infoBlock';

const Menu = () => (
  <Layout pageInfo={{ pageName: 'contact' }}>
    <SEO title="Contact" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <FirstSection title="Contact Us" buttonName="Contact" linkPath="contact" />
          </section>
          <section>
            <InfoBlock />
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

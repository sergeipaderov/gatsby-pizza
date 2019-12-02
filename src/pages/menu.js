import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';
import MenuBlock from '../components/menuBlock/menuBlock';
import PricingBlock from '../components/pricingBlock/pricingBlock';

const Menu = () => (
  <Layout pageInfo={{ pageName: 'menu' }}>
    <SEO title="Menu" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <FirstSection title="Our menu" buttonName="Menu" linkPath="menu" />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <MenuBlock />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <PricingBlock />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

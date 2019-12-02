import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';
import ServicesBlock from '../components/servicesBlock';

const Menu = () => (
  <Layout pageInfo={{ pageName: 'services' }}>
    <SEO title="Services" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <FirstSection title="Services" buttonName="Services" linkPath="services" />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <ServicesBlock />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

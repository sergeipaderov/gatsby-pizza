import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstSection from '../components/firstSection';
import ContactInfo from '../components/contactInfo';
import About from '../components/about';
import CounterBlock from '../components/counterBlock';

const Menu = () => (
  <Layout pageInfo={{ pageName: 'about' }}>
    <SEO title="About" />
    <div className="text-center">
      <Row className="justify-content-center no-gutters">
        <Col>
          <section>
            <FirstSection title="About" buttonName="About" linkPath="about" />
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <ContactInfo />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <About />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <CounterBlock />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

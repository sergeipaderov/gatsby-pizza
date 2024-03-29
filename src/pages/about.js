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
import ContactBlock from '../components/contactBlock/contactBlock';
import StaffBlock from '../components/staffBlock/staffBlock';

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
                <StaffBlock />
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
          <section>
            <Row className="justify-content-center no-gutters">
              <Col>
                <ContactBlock />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Menu;

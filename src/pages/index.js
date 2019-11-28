import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ControlledCarousel from '../components/controlledCarousel/controlledCarousel';
import ContactInfo from '../components/contactInfo';
import About from '../components/about';

const IndexPage = () => (
  <>
    <Layout pageInfo={{ pageName: 'index' }}>
      <SEO title="Home" keywords={['gatsby', 'react', 'bootstrap']} />
      <div className="text-center">
        <Row className="justify-content-center">
          <Col md="12">
            <section>
              <Row className="justify-content-center">
                <Col md="12">
                  <section>
                    <ControlledCarousel />
                  </section>
                </Col>
              </Row>
            </section>
            <section>
              <Row className="justify-content-center">
                <Col md="12">
                  <section>
                    <ContactInfo />
                  </section>
                </Col>
              </Row>
            </section>
            <section>
              <Row className="justify-content-center">
                <Col md="12">
                  <section>
                    <About />
                  </section>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </div>
    </Layout>
  </>
);

export default IndexPage;

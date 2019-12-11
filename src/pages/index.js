import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ControlledCarousel from '../components/controlledCarousel/controlledCarousel';
import ContactInfo from '../components/contactInfo';
import About from '../components/about';
import ServicesBlock from '../components/servicesBlock';
import MenuBlock from '../components/menuBlock/menuBlock';
import PricingBlock from '../components/pricingBlock/pricingBlock';
import GalleryBlock from '../components/galleryBlock';

const IndexPage = () => (
  <>
    <Layout pageInfo={{ pageName: 'index' }}>
      <SEO title="Home" keywords={['gatsby', 'react', 'bootstrap']} />
      <div className="text-center">
        <Row className="justify-content-center no-gutters">
          <Col>
            <section>
              <Row className="justify-content-center no-gutters">
                <Col>
                  <ControlledCarousel />
                </Col>
              </Row>
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
                  <ServicesBlock />
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
            <section>
              <Row className="justify-content-center no-gutters">
                <Col>
                  <GalleryBlock />
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

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
// import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div fluid="true" className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <div style={{ width: '100%', padding: 0, margin: 0 }}>
                <main>{children}</main>
              </div>
            </Col>
          </Row>
        </div>
        <div fluid="true" className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <Footer />
              </footer>
            </Col>
          </Row>
        </div>
      </>
    )}
  />
);

export default Layout;

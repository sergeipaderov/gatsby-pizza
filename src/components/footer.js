import React from 'react';
import { Link } from 'gatsby';
import {
  Overlay, Container, Row, Col, Image,
} from 'react-bootstrap';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { MdPerson, MdChat, MdPhone } from 'react-icons/md';

import '../styles/customNavbar.scss';

const Footer = () => (

  <>
    <Overlay />
    <Container className="footer-container">
      <Row>
        <Col lg={3} md={6}>
          <div className="ftco-footer-widget">
            <h2 className="ftco-heading-2">About Us</h2>
            <p className="ftco-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><Link to="/"><TiSocialTwitter className="social-icon" /></Link></li>
              <li className="ftco-animate"><Link to="/"><TiSocialFacebook className="social-icon" /></Link></li>
              <li className="ftco-animate"><Link to="/"><TiSocialInstagram className="social-icon" /></Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={4} md={6} className="mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Recent Blog</h2>
            <div className="block-21 mb-4 d-flex">
              <Link to="/blog" className="blog-img_link">
                <Image className="blog-img" src="images/image_1.jpg" />
              </Link>
              <div className="text">
                <h3 className="heading"><Link className="link" to="/blog">Even the all-powerful Pointing has no control about</Link></h3>
                <div className="meta">
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-calendar" /> */}
                      <FaCalendarAlt className="icon-info" />
                      {' '}
                            Sept 15, 2018
                    </Link>

                  </div>
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-person" /> */}
                      <MdPerson className="icon-info" />
                      {' '}
                            Admin
                    </Link>

                  </div>
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-chat" /> */}
                      <MdChat className="icon-info" />
                      {' '}
                            19
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <Link to="/blog" className="blog-img_link">
                <Image className="blog-img" src="images/image_2.jpg" />
              </Link>
              <div className="text">
                <h3 className="heading"><Link className="link" to="/blog">Even the all-powerful Pointing has no control about</Link></h3>
                <div className="meta">
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-calendar" /> */}
                      <FaCalendarAlt className="icon-info" />
                      {' '}
                            Sept 15, 2018
                    </Link>

                  </div>
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-person" /> */}
                      <MdPerson className="icon-info" />
                      {' '}
                            Admin
                    </Link>

                  </div>
                  <div>
                    <Link className="link info" to="/blog">
                      {/* <span className="icon-chat" /> */}
                      <MdChat className="icon-info" />
                      {' '}
                            19
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={2} md={6} className="mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="link py-2 d-block">Cooked</Link></li>
              <li><Link to="/contact" className="link py-2 d-block">Deliver</Link></li>
              <li><Link to="/contact" className="link py-2 d-block">Quality Foods</Link></li>
              <li><Link to="/contact" className="link py-2 d-block">Mixed</Link></li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6} className="mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul className="contacts-list">
                <li>
                  {/* <span className="icon icon-map-marker" /> */}
                  <FaMapMarkerAlt className="contact-icon modif" />
                  <span className="text modif">203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li>
                  <Link to="/contact">
                    {/* <span className="icon icon-phone" /> */}
                    <MdPhone className="contact-icon" />
                    <span className="text">+2 392 3929 210</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    {/* <span className="icon icon-envelope" /> */}
                    <FaEnvelope className="contact-icon" />
                    <span className="text">info@yourdomain.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Footer;

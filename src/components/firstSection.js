import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Row, Col, Container, Overlay, Button,
} from 'react-bootstrap';
import '../styles/firstSection.scss';

const FirstSection = (props) => {
  const { title, buttonName, linkPath } = props;
  return (

    <div className="first-section">
      <Overlay />
      <Container>
        <Row className="slider-text justify-content-center align-items-center">

          <Col md={7} sm={12} className="text-center ftco-animate">
            <h1 mb={3} mt={5} className="bread title">{title}</h1>
            <p className="breadcrumbs">
              <Link to="/" className="main-button">Home</Link>
              <Link to={`/${linkPath}`} className="secondary-button">{buttonName}</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

FirstSection.propTypes = {
  title: PropTypes.string,
  buttonName: PropTypes.string,
  linkPath: PropTypes.string,
};

FirstSection.defaultProps = {
  title: '',
  buttonName: '',
  linkPath: '',
};

export default FirstSection;

import React from 'react';
import {
  Col, Card,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../../styles/foodMenu.scss';

const FoodMenuItem = (props) => {
  const {
    itemImage, itemTitle, itemText, itemPrice,
  } = props;

  return (
    <Col md={4} xs={12}>
      <Card className="menu-food-item">
        <div className="img-wrapper">
          <Link className="card-img" to="/">
            <Card.Img
              src={itemImage}
            />
          </Link>
        </div>
        <Card.Body className="menu-info">
          <Card.Title className="menu-title">{itemTitle}</Card.Title>
          <Card.Text className="menu-text">
            {itemText}
          </Card.Text>
          <div className="menu-footer">
            <span className="menu-price">{`$${itemPrice}`}</span>
            <Link style={{ border: 'solid 1px white', padding: '5px 10px' }} to="/">
              <div className="menu-block-button">Add to cart</div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

FoodMenuItem.defaultProps = {
  itemImage: '',
  itemTitle: '',
  itemText: '',
  itemPrice: '',
};

FoodMenuItem.propTypes = {
  itemImage: PropTypes.string,
  itemTitle: PropTypes.string,
  itemText: PropTypes.string,
  itemPrice: PropTypes.string,
};

export default FoodMenuItem;

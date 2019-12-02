import React from 'react';
import {
  Col, Card,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../../styles/menuBlock.scss';

const MenuItem = (props) => {
  const {
    itemImage, itemTitle, itemText, itemPrice, reversed,
  } = props;

  return (
    <Col lg={4}>
      <Card className={`menu-item ${reversed ? 'reversed' : ''}`}>
        <Link className="card-img" to="/">
          <Card.Img style={{ height: '240px', width: '240px', overflow: 'hidden' }} src={itemImage} />
        </Link>
        <Card.Body className="menu-info">
          <Card.Title className="menu-title">{itemTitle}</Card.Title>
          <Card.Text className="menu-text">
            {itemText}
          </Card.Text>
          <div className="menu-footer">
            <span className="menu-price">{`$${itemPrice}`}</span>
            <Link style={{ border: 'solid 1px white', padding: '5px 10px' }} to="/">
              <div className="menu-block-button">Order</div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

MenuItem.defaultProps = {
  itemImage: '',
  itemTitle: '',
  itemText: '',
  itemPrice: '',
  reversed: false,
};

MenuItem.propTypes = {
  itemImage: PropTypes.string,
  itemTitle: PropTypes.string,
  itemText: PropTypes.string,
  itemPrice: PropTypes.string,
  reversed: PropTypes.bool,
};

export default MenuItem;

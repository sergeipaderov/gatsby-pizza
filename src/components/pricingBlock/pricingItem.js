import React from 'react';
import {
  Col, Card,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../../styles/menuBlock.scss';

const PricingItem = (props) => {
  const {
    itemImage, itemTitle, itemText, itemPrice
  } = props;

  return (
    <div className="pricing-entry d-flex ftco-animate">
        <div className="img" style={{ backgroundImage: `url(${itemImage})` }} />
        <div className="desc pl-3">
            <div className="d-flex text align-items-center">
                <h3><span>{itemTitle}</span></h3>
                <span className="price">${itemPrice}</span>
            </div>
            <div className="d-block">
                <p>{itemText}</p>
            </div>
        </div>
    </div>
  );
};

PricingItem.defaultProps = {
  itemImage: '',
  itemTitle: '',
  itemText: '',
  itemPrice: '',
};

PricingItem.propTypes = {
  itemImage: PropTypes.string,
  itemTitle: PropTypes.string,
  itemText: PropTypes.string,
  itemPrice: PropTypes.string,
};

export default PricingItem;

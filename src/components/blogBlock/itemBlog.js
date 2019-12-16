import React from 'react';
import {
  Col,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';


import '../../styles/blog.scss';

const ItemBlog = (props) => {
  const {
    cover, date, member, comments, title, text,
  } = props;

  return (
    <Col md={4} className="d-flex ftco-animate">
      <div className="entry align-self-stretch">
        <Link to="/blog" className="block-201" style={{ backgroundImage: `url(${cover})` }} />
        <div className="text py-4 d-block">
          <div className="meta">
            <div><Link to="/">{date}</Link></div>
            <div><Link to="/">{member}</Link></div>
            <div>
              <Link to="/" className="meta-chat">
                <MdChat />
                {' '}
                {comments}
              </Link>

            </div>
          </div>
          <h3 className="heading mt-2"><Link to="/">{title}</Link></h3>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

ItemBlog.defaultProps = {
  cover: '',
  date: '',
  member: '',
  comments: 0,
  title: '',
  text: '',
};

ItemBlog.propTypes = {
  cover: PropTypes.string,
  date: PropTypes.string,
  member: PropTypes.string,
  comments: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ItemBlog;

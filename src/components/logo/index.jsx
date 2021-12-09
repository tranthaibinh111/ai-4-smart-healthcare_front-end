// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const Logo = ({ image, classOption }) => (
  <Link className={`${classOption}`} to={`${process.env.PUBLIC_URL}/`}>
    <img
      className="sticky-img"
      src={process.env.PUBLIC_URL + image}
      alt="Logo"
    />
  </Link>
);

// #region Khai báo Props
Logo.propTypes = {
  image: PropTypes.string,
  classOption: PropTypes.string,
};

Logo.defaultProps = {
  image: '',
  classOption: 'text-center',
};
// #endregion

export default Logo;

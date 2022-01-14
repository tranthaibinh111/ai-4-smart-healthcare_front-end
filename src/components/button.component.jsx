// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const Button = ({ classOption, text, path }) => (
  <Link to={process.env.PUBLIC_URL + path} className={`${classOption}`}>
    {text}
  </Link>
);

// #region Khai báo Props
Button.propTypes = {
  classOption: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

Button.defaultProps = {
  classOption: 'btn',
  text: '',
  path: '',
};
// #endregion

export default Button;

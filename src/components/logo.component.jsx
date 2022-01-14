// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
import { RootService } from '../shared/services';
// #endregion

const Logo = ({ image, classOption }) => {
  // #region Parameters
  const rootService = RootService();
  // #endregion

  return (
    <Link className={`${classOption}`} to={`${rootService.home}`}>
      <img className='sticky-img' src={rootService.img(image)} alt='Logo' />
    </Link>
  );
};

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

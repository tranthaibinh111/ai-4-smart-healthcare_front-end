// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const SectionTitle = ({ subTitle, title, classOption }) => (
  <div className={`section-title ${classOption}`} data-aos='fade-up'>
    {subTitle && <p>{subTitle}</p>}
    {title && <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />}
  </div>
);

// #region Khai báo Props
SectionTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  classOption: PropTypes.string,
};

SectionTitle.defaultProps = {
  subTitle: '',
  title: '',
  classOption: 'section-title',
};
// #endregion

export default SectionTitle;

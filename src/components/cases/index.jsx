// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const CasesItem = ({ data }) => (
  <div className="case-item">
    <div className="thumb">
      <img
        src={`${process.env.PUBLIC_URL}/${data.image}`}
        alt="Hope"
      />
    </div>
    <div className="content">
      <h5 className="name">
        <Link to="/">{data.name}</Link>
      </h5>
      <h6 className="category">{data.department}</h6>
    </div>
  </div>
);

// #region Khai báo Props
CasesItem.propTypes = {
  data: PropTypes.object,
};

CasesItem.defaultProps = {
  data: null,
};
// #endregion

export default CasesItem;

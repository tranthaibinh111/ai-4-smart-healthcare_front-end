// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const AboutAddress = ({ data }) => (
  <div className="office-address-item">
    <h5>{data.title}</h5>
    <ul>
      {data.list.map((single, i) => <li key={i}>{single}</li>)}
    </ul>
  </div>
);

// #region Khai báo Props
AboutAddress.propTypes = {
  data: PropTypes.object,
};

AboutAddress.defaultProps = {
  data: null,
};
// #endregion
export default AboutAddress;

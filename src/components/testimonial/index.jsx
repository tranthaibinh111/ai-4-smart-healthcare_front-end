// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const Testimonial = ({ data }) => (
  <div className="testimonial-item">
    <div className="thumb">
      <img
        src={process.env.PUBLIC_URL + data.image}
        alt="testimonial"
      />
    </div>
    <div className="client-content">
      <p>{data.excerpt}</p>
    </div>
    <div className="client-info">
      <div className="desc">
        <h4 className="name">{data.name}</h4>
        <p className="client-location">{data.location}</p>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
Testimonial.propTypes = {
  data: PropTypes.object,
};

Testimonial.defaultProps = {
  data: null,
};
// #endregion

export default Testimonial;

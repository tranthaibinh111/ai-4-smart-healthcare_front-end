// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const Team = ({ data }) => (
  <div className="team-member">
    <div className="thumb">
      <img
        src={process.env.PUBLIC_URL + data.image}
        alt="hope-Binh Tran"
      />
    </div>
    <div className="content">
      <div className="member-info">
        <h4 className="name">{data.name}</h4>
        <p>{data.excerpt}</p>
        <Link to="/" className="btn-link">
          Đọc thêm
        </Link>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
Team.propTypes = {
  data: PropTypes.object,
};

Team.defaultProps = {
  data: null,
};
// #endregion

export default Team;

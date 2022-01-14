// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region Ai 4 Smart Healthcare
// Service
import { RootService } from '../shared/services';
// #endregion

const Team = ({ data }) => {
  const rootSErvice = RootService();

  return (
    <div className='team-member'>
      <div className='thumb'>
        <img src={rootSErvice.img(data.image)} alt={data.name} />
      </div>
      <div className='content'>
        <div className='member-info'>
          <h4 className='name'>{data.name}</h4>
          <p>{data.excerpt}</p>
          <Link to='/' className='btn-link'>
            Đọc thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
Team.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    excerpt: PropTypes.string,
  }),
};

Team.defaultProps = {
  data: null,
};
// #endregion

export default Team;

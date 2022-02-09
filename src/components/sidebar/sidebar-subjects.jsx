// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
import { RootService } from '../../shared/services';
// #endregion

const SidebarSubjects = ({ data }) => {
  const rootService = RootService();

  return (
    <div className='widget-side-nav'>
      <ul>
        {data.length > 0 &&
          data.map((single, key) => (
            <li key={key}>
              <NavLink activeClassName='active' to={rootService.serviceDetails(single.name)}>
                {single.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

// #region Khai báo Props
SidebarSubjects.propTypes = {
  data: PropTypes.array,
};

SidebarSubjects.defaultProps = {
  data: [],
};
// #endregion

export default SidebarSubjects;

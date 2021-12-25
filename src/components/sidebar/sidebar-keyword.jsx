// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

const SidebarKeyword = ({ data }) => (
  <div className="widget-tags tags-style2">
    <ul>
      {data && data.map((keyword, i) => (
        <li key={i}>
          <a target="_blank" rel="noreferrer" href={keyword.url}>
            {keyword.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// #region Khai báo Props
SidebarKeyword.propTypes = {
  data: PropTypes.array,
};

SidebarKeyword.defaultProps = {
  data: [],
};
// #endregion

export default SidebarKeyword;

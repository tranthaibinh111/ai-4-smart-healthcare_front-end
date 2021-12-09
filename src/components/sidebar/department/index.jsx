// #region React
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import { flatDeep, slugify, containsObject } from '../../../utils';

// #region AI 4 Smart Healthcare
// #region Components
import SidebarTitle from '../sidebar-title';
// #endregion
// #endregion

const DepartmentWidget = ({ data }) => {
  // #region Parameters
  const cats = data.map((item) => item.categories);
  const singleCatArray = flatDeep(cats);
  // eslint-disable-next-line prefer-const
  let categories = [];

  singleCatArray.forEach((cat) => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1,
    };
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1,
      };
    } else
      categories.push(obj);
  });
  // #endregion

  return (
    <div className="widget-item">
      <SidebarTitle title="Departments" />
      <div className="widget-side-nav">
        <ul>
          {data.map((single, i) => (
            <li key={i}>
              <NavLink
                activeClassName="active"
                to={`${process.env.PUBLIC_URL}/service-details/${slugify(single.id)}`}
              >
                {single.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// #region Khai báo Props
DepartmentWidget.propTypes = {
  data: PropTypes.array,
};

DepartmentWidget.defaultProps = {
  data: [],
};
// #endregion

export default DepartmentWidget;

// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import { flatDeep, slugify, containsObject } from '../../../utils';

const SidebarCategories = ({ data }) => {
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
    <div className="widget-categories">
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <Link to={`${process.env.PUBLIC_URL}/category/${cat.slug}`}>
              {cat.title}
              {' '}
              <span>{cat.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// #region Khai báo Props
SidebarCategories.propTypes = {
  data: PropTypes.array,
};

SidebarCategories.defaultProps = {
  data: [],
};
// #endregion

export default SidebarCategories;

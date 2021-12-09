// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// utils
import { flatDeep, slugify, containsObject } from '../../../utils';

const SidebarTag = ({ data }) => {
  // #region Parameters
  const tags = data.map((item) => item.tags);
  const singleTagArray = flatDeep(tags);
  // eslint-disable-next-line prefer-const
  let allTags = [];

  singleTagArray.forEach((tag) => {
    const obj = {
      title: tag.trim(),
      slug: slugify(tag),
    };
    const objIndex = containsObject(obj, allTags);
    if (objIndex !== -1) {
      allTags[objIndex] = {
        title: tag.trim(),
        slug: slugify(tag),
      };
    } else
      allTags.push(obj);
  });
  // #endregion

  return (
    <div className="widget-tags tags-style2">
      <ul>
        {allTags.map((single, i) => (
          <li key={i}>
            <Link to={`${process.env.PUBLIC_URL}/tag/${single.slug}`}>
              {single.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// #region Khai báo Props
SidebarTag.propTypes = {
  data: PropTypes.array,
};

SidebarTag.defaultProps = {
  data: [],
};
// #endregion

export default SidebarTag;

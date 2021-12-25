// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import BlogData from '../../data/blog.json';
// #endregion

// #region Components
import BlogListItem from '../../components/blog-list';
import SidebarSearch from '../../components/sidebar/search';
import SidebarCategories from '../../components/sidebar/sidebar-categories';
import SidebarPost from '../../components/sidebar/sidebar-post';
import SidebarKeyword from '../../components/sidebar/sidebar-keyword';
import SidebarTitle from '../../components/sidebar/sidebar-title';
// #endregion
// #endregion

const ReferenceItemContainer = ({ data }) => (
  <div className="blog-area section-py blog-border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-items-style2">
            {data
              && data.map((single, i) => (
                <BlogListItem key={i} data={single} />
              ))}
          </div>
          <div className="pagination-area mb-md-80">
            <nav>
              <ul className="page-numbers">
                <li>
                  <span className="page-number current">
                    1
                  </span>
                </li>
                <li>
                  <Link className="page-number" to="/">
                    2
                  </Link>
                </li>
                <li>
                  <Link className="page-number" to="/">
                    3
                  </Link>
                </li>
                <li>
                  <Link className="page-number" to="/">
                    4
                  </Link>
                </li>
                <li>
                  <Link
                    className="page-number next"
                    to="/"
                  >
                    <i className="icofont-thin-right" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-wrapper blog-sidebar-wrapper">
            <div className="widget-item">
              <SidebarTitle title="Search" />
              <SidebarSearch />
            </div>
            <div className="widget-item">
              <SidebarTitle title="Categories" />
              <SidebarCategories data={BlogData} />
            </div>
            <div className="widget-item">
              <SidebarTitle title="Recent posts" />
              <SidebarPost data={BlogData} />
            </div>
            <div className="widget-item">
              <SidebarTitle title="TAGS" />
              <SidebarKeyword data={BlogData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
ReferenceItemContainer.propTypes = {
  data: PropTypes.array,
};

ReferenceItemContainer.defaultProps = {
  data: [],
};
// #endregion

export default ReferenceItemContainer;

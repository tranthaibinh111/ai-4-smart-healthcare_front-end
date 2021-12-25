// #region React
import React from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { keywordData } from '../../data';
import BlogData from '../../data/blog.json';
// #endregion

// #region Components
import BlogListItem from '../../components/blog-list';
import { SidebarKeyword } from '../../components/sidebar';
import SidebarTitle from '../../components/sidebar/sidebar-title';
// #endregion
// #endregion

const ReferenceListContainer = () => (
  <div className="blog-area section-py blog-border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-items-style2">
            {BlogData
              && BlogData.map((single, i) => (
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
              <SidebarTitle title="Keywords" />
              <SidebarKeyword data={keywordData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReferenceListContainer;

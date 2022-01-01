// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { keywordData } from '../../data';
// #endregion

// #region Components
import ReferenceCard from '../../components/reference/reference-card';
import { SidebarKeyword } from '../../components/sidebar';
import SidebarTitle from '../../components/sidebar/sidebar-title';
// #endregion
// #endregion

const ReferenceListContainer = ({ data, pagination }) => (
  <div className="blog-area section-py blog-border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-items-style2">
            {data.map((reference, idx) => (
              <ReferenceCard key={`reference-card-${idx}`} data={reference} />
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

// #region Khai báo Props
ReferenceListContainer.propTypes = {
  data: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    previousPage: PropTypes.bool.isRequired,
    nextPage: PropTypes.bool.isRequired,
  }).isRequired,
};
// #endregion

export default ReferenceListContainer;

// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { keywordData } from '../../data';
// #endregion

// Services
import RootService from '../../shared/services/root.service';

// #region Components
import ReferenceCard from '../../components/reference/reference-card';
import { SidebarKeyword, SidebarTitle } from '../../components';
// #endregion
// #endregion

const ReferenceListContainer = ({ data, pagination }) => {
  // #region Parameters
  // AI 4 Smart Healthcare;
  const rootService = RootService();
  // #enregion

  return (
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
                  {[...Array(pagination.pageSize)].map((_, idx) => {
                    const page = idx + 1;

                    return (
                      <li key={`page-number-li-${idx}`}>
                        {pagination.page === page && (
                          <span className="page-number current">{page}</span>
                        )}
                        {pagination.page !== page && (
                          <Link className="page-number" to={rootService.references(page)}>
                            {page}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                  {pagination.nextPage && (
                    <li>
                      <Link
                        className="page-number next"
                        to={rootService.references(pagination.page + 1)}
                      >
                        <i className="icofont-thin-right" />
                      </Link>
                    </li>
                  )}
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
};

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

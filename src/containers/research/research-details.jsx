// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import {
  // Reference
  ReferenceGrid,
  // Research
  ResearchDetailsWrap,
  // Sidebar
  SidebarAuthors,
  SidebarReference,
  SidebarTitle,
} from '../../components';
// #endregion
// #endregion

const ResearchDetailsContainer = ({ data, related, recent }) => (
  <div className="blog-details-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-details-content">
            <div className="post-details-body">
              <ResearchDetailsWrap data={data} />
              <div className="related-post">
                <h2 className="title">
                  Tài liệu
                  {' '}
                  <span>liên quan</span>
                </h2>
                <div className="post-items-style3">
                  <div className="row">
                    {related?.length > 0 && related.map((item, idx) => (
                      <div className="col-md-6" key={`Research-grid-div-${idx}`}>
                        <ReferenceGrid data={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-wrapper blog-sidebar-wrapper mb-md-80 pt-md-10 pt-160">
            <div className="widget-item">
              <SidebarTitle title="Tác giả" />
              <SidebarAuthors data={data?.authors} />
            </div>
            {data?.doi && (
              <div className="widget-item">
                <SidebarTitle title="DOI" />
                <div className="widget-search-box">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <a
                    href={`https://doi.org/${data.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    dangerouslySetInnerHTML={{ __html: data.doi }}
                  />
                </div>
              </div>
            )}
            <div className="widget-item">
              <SidebarTitle title="Tài liệu (mới nhất)" />
              <SidebarReference data={recent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
ResearchDetailsContainer.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.array,
    keywords: PropTypes.array,
    doi: PropTypes.string,
  }),
  related: PropTypes.array,
  recent: PropTypes.array,
};

ResearchDetailsContainer.defaultProps = {
  data: null,
  related: [],
  recent: [],
};
// #endregion

export default ResearchDetailsContainer;

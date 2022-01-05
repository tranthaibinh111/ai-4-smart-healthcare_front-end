// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Components
import {
  // Reference
  SidebarAuthors,
  SidebarKeyword,
  SidebarTitle,
} from '../../components';
import ReferenceGrid from '../../components/reference/reference-grid';
import ReferenceDetailsWrap from '../../components/reference/reference-details';
import SidebarReference from '../../components/sidebar/sidebar-reference';
// #endregion
// #endregion

const ReferenceDetailsContainer = ({ data, related, recent }) => (
  <div className="blog-details-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-details-content">
            <div className="post-details-body">
              <ReferenceDetailsWrap data={data} />
              <div className="related-post">
                <h2 className="title">
                  Tài liệu
                  {' '}
                  <span>liên quan</span>
                </h2>
                <div className="post-items-style3">
                  <div className="row">
                    {related?.length > 0 && related.map((item, idx) => (
                      <div className="col-md-6" key={`reference-grid-div-${idx}`}>
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
            {data?.keywords.length > 0 && (
              <div className="widget-item">
                <SidebarTitle title="Keywords" />
                <SidebarKeyword data={data.keywords} />
              </div>
            )}
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
ReferenceDetailsContainer.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.array,
    keywords: PropTypes.array,
    doi: PropTypes.string,
  }),
  related: PropTypes.array,
  recent: PropTypes.array,
};

ReferenceDetailsContainer.defaultProps = {
  data: null,
  related: [],
  recent: [],
};
// #endregion

export default ReferenceDetailsContainer;

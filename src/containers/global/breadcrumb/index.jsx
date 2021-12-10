// #region React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

const Breadcrumb = ({
  prevs,
  contentThree,
  title,
  classOptionOne,
  classOptionTwo,
}) => (
  <div className="page-title-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={`page-title-content ${classOptionOne}`}>
            <div className={`bread-crumbs ${classOptionTwo}`}>
              {prevs.map((prev) => (
                <Link
                  key={prev.text}
                  to={process.env.PUBLIC_URL + prev.path}
                >
                  {prev.text}
                  <span className="breadcrumb-sep">
                    /
                  </span>
                </Link>
              ))}

              <span className="active">{contentThree}</span>
            </div>
            <h4 className="title" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// #region Khai báo Props
Breadcrumb.propTypes = {
  prevs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  contentThree: PropTypes.string,
  classOptionOne: PropTypes.string,
  classOptionTwo: PropTypes.string,
  title: PropTypes.string,
};

Breadcrumb.defaultProps = {
  prevs: {
    text: '',
    path: '',
  },
  contentThree: '',
  classOptionOne: 'page-title-content',
  classOptionTwo: 'bread-crumbs',
  title: '',
};
// #endregion

export default Breadcrumb;

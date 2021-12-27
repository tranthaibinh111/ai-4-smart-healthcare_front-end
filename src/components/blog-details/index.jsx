// #region React
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region AI 4 Smart Healthcare
// #region Data
import { keywordData } from '../../data';
// #endregion

// #region Components
import PdfViewerComponent from '../pdf-viewer.component';
import SidebarKeyword from '../sidebar/sidebar-keyword';
// #endregion
// #endregion

// eslint-disable-next-line no-unused-vars
const BlogDetailsWrap = ({ data }) => {
  // #region Parameters
  const [fileUrl] = useState('http://localhost:3000/file-example_PDF_1MB.pdf');
  // #endregion

  return (
    <div className="blog-details-wrpa">
      <div className="content">
        <PdfViewerComponent fileUrl={fileUrl} />
        {/*
        <img
          src={`${process.env.PUBLIC_URL}/${data.media.largeImage}`}
          alt="hope-Blog"
        />
        <div className="meta">
          {cate}
          <span>-</span>
          <Link
            className="author"
            to={`${process.env.PUBLIC_URL}/date/${slugify(data.date)}`}
          >
            {data.date}
          </Link>
          <span>by</span>
          <Link
            className="author"
            to={`${process.env.PUBLIC_URL}/author/${slugify(data.author)}`}
          >
            {data.author}
          </Link>
        </div>
        {data.body.map((single, key) => (
          <div className="desc" key={key}>
            {single}
          </div>
        ))} */}
        <SidebarKeyword data={keywordData} />
      </div>
    </div>
  );
};

// #region Khai báo Props
BlogDetailsWrap.propTypes = {
  data: PropTypes.object,
};

BlogDetailsWrap.defaultProps = {
  data: null,
};
// #endregion

export default BlogDetailsWrap;
